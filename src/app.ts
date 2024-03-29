import { Component } from 'react'
import Taro from '@tarojs/taro'
import './app.scss'

class App extends Component {

  componentDidMount () {
    console.log(Taro.pxTransform(60, 750))
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
