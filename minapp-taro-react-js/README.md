## 路由系统
遵循微信小程序的路由规范。只需要修改全局配置的pages属性，配置为taro应用中每个页面的路径即可。
```js
// 跳转到目的页面，打开新页面
Taro.navigateTo({
  url: '/pages/page/path/name'
})
// 跳转到目的页面，在当前页面打开
Taro.redirectTo({
  url: '/pages/page/path/name'
})
// 获取路由传参
getCurrentInstance().router.params
```

## 接口
```js
Taro.request(option)
```
## 接入rematch

## 客服端存储

## react-devtools