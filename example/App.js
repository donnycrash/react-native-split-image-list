import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import SplitImageList from 'react-native-split-image-list'

const data = [{
  image: 'https://photos.smugmug.com/photos/i-Nk5z68w/2/M/i-Nk5z68w-M.jpg',
  title: 'Feel Like Drifting?'
},
{
  image: 'https://photos.smugmug.com/photos/i-PWFKRvP/1/M/i-PWFKRvP-M.jpg',
  title: 'Almighty NSX'
},
{
  image: 'https://photos.smugmug.com/photos/i-bs5mHJD/2/M/i-bs5mHJD-M.jpg',
  title: 'Quattro Power'
},
{
  image: 'https://photos.smugmug.com/photos/i-qkDzWVN/1/M/i-qkDzWVN-M.jpg',
  title: 'Retro Beams'
},
{
  image: 'https://photos.smugmug.com/photos/i-CpKJHrc/1/M/i-CpKJHrc-M.jpg',
  title: 'Nismo fireballs'
},
{
  image: 'https://photos.smugmug.com/photos/i-shgHzWh/1/M/i-shgHzWh-M.jpg',
  title: 'Dubai on the block'
}
]

export default class App extends React.Component {
  renderItems = (item) => {
    return <View style={{ position: 'absolute', bottom: 60, left: 10, right: 10, backgroundColor: '#00000069', borderRightWidth: 3, borderRightColor: 'red' }}>
      <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold', padding: 10 }}>{item.title.toUpperCase()}</Text>
    </View>
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <SplitImageList data={data} count={4} renderOverlay={this.renderItems} />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
