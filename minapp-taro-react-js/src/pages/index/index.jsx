import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleOnClick () {
    console.log('object');
  }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Button>zabuxing </Button>
      </View>
    )
  }
}
