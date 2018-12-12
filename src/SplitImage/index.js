import React, { Component } from 'react'
import { StyleSheet, Image, View, Dimensions, Animated } from 'react-native'

class SplitImage extends Component {
  setNativeProps = (nativeProps) => {
    this._root.setNativeProps(nativeProps)
  }

  static defaultProps = {
    count: 3,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    padding: 2,
    sliceMinHeight: 5,
    sliceMaxHeight: 60,
    index: 0,
    totalItems: 0
  }

  renderSplice = (i) => {
    const { width, count, padding, sliceMinHeight, sliceMaxHeight, source, animatedValue, index, totalItems } = this.props
    const mainWidth = width / count
    const offset = mainWidth * i
    const topOffset = Math.floor(Math.random() * (sliceMaxHeight - sliceMinHeight + 1) + sliceMinHeight)
    let translateY = animatedValue.interpolate({
      inputRange: [width * (index === 0 ? 0 : index - 1), (width * (index + 1))],
      outputRange: [(index === 0 || index === (totalItems - 1) ? 0 : topOffset), -topOffset],
      extrapolate: 'clamp'
    })
    return <Animated.View
      key={`SplitImage-${i}`}
      style={{
        overflow: 'hidden',
        width: mainWidth - padding,
        position: 'absolute',
        left: offset,
        bottom: topOffset,
        top: topOffset,
        transform: [{ translateY }]
      }}>
      <Image source={{ uri: source }} style={{
        width,
        height: width,
        position: 'absolute',
        left: -offset,
        top: -topOffset
      }} />
    </Animated.View>
  }

  handleSplice = () => {
    const { count } = this.props
    const items = []
    for (var i = 0; i < count; i++) {
      items.push(this.renderSplice(i))
    }
    return items
  }

  render () {
    const { width, height, source, children } = this.props
    return (
      <View style={{ width, height }}>
        { source && this.handleSplice() }
        <View style={styles.absolute}>
          {children}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  absolute: { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }
})

export default SplitImage
