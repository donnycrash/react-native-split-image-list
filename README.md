# react-native-split-image-list

Make your image lists more interactive or at least more visually appealing with this beautiful split image list.
![Demo image](https://user-images.githubusercontent.com/7405682/50089427-7eb37a80-020e-11e9-8968-f8f0552ec288.gif)

## Installation

Use yarn or npm to install react-native-split-image-list.

```bash
yarn add react-native-split-image-list
```
or

```bash
npm install react-native-split-image-list --save
```

## Usage

```javascript
import SplitImageList from 'react-native-split-image-list'

...
render () {
  return <SplitImageList data={images}>
}

```

react-native-split-image-list requires an `image` property of type `String` on each item eg
```javascript
const images = [
  { image: 'url-to-image'},
  { image: 'url-to-image2'},
  { image: 'url-to-image3'}
]
```

Along with rendering images, you have the ability to render overlays for each items using the `renderOverlay` prop eg:
```javascript
const images = [
  { image: 'url-to-image', title: 'one'},
  { image: 'url-to-image2', title: 'two'},
  { image: 'url-to-image3', title: 'three'}
]

 renderItems = (item) => {
    return <View >
      <Text>{item.title.toUpperCase()}</Text>
    </View>
  }

 render () {
  return <SplitImageList data={images} renderOverlay={this.renderItems}>
}
```

## Api
| Prop | Type | Required | Description |
| ------ | ------ | ------ | ------ |
| count | int | no | Number of splices to give image _(Default 3)_  |
| imageWidth | int | no | Width of each item _(Default window width)_ |
| imageHeight | int | no | Height of each item _(Default window width)_ |
| data | Array | yes | Arrays of items to display, each item requires and image attr |
| renderOverlay | func | no | applies an overlay of your choice, returns (item, index) |


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)