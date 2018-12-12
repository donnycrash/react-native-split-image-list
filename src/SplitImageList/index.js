import React, { Component } from 'react'
import { Animated } from 'react-native'
import SplitImage from '../SplitImage'

class SplitImageList extends Component {
  state = {
    animatedValue: new Animated.Value(0)
  }

  renderItem = (item, index) => {
    const { count, data, imageWidth, imageHeight } = this.props
    return <SplitImage
      width={imageWidth}
      height={imageHeight}
      source={item.image}
      animatedValue={this.state.animatedValue}
      count={count}
      index={index}
      totalItems={data.length}>
      { this.renderChildren(item, index) }
    </SplitImage>
  }

  renderChildren = (item, index) => {
    const { renderOverlay } = this.props
    if (renderOverlay && typeof renderOverlay === 'function') {
      return renderOverlay(item, index)
    }
  }

  render () {
    const { data } = this.props
    return <Animated.FlatList
      data={data}
      keyExtractor={(item, i) => `spl-img-${i}`}
      renderItem={({ item, index }) => this.renderItem(item, index)}
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: this.state.animatedValue } } }],
        {
          useNativeDriver: true,
          isInteraction: false
        }
      )}
    />
  }
}

export default SplitImageList
