# reduxDemo
一个基于React-Router和redux，react-redux,redux-thunk, immutable的单页面训练项目
## 搭建部署
本项目使用fis和webpack管理部署
## 路由，视图，数据流
> 视图：本项目视图层使用react组件来组装；
> 路由：本项目路由使用react-router;
> 数据流：本项目数据流管理使用redux。主要分布在actions，reducers，store目录下，constants目录下保存action的type静态常量（在小项目中可以直接使用字符串，但是当项目复杂时字符串不利于管理，因此保存在constants目录下比较好）
## 基本流程

### 配图——项目目录排布图

### 在store目录里配置configureStore
1. 用中间件使action创建函数可以返回一个function代替一个action对象
2. 如果在热替换状态下,允许替换reducer,返回store

### 在最顶层index.jsx将返回导出的store放进Provider容器组件里
1. 调用configureStore,获得返回的store
2. 引入react-redux,将返回的store放进Provider容器组件里
3. 将Provider放在组件顶层,并渲染,这里将其包含在了routes变量外,路由可以按照原来的方式跳转

### 在actions里写相关action代码

### 在reducers里写相关reducer代码

## redux-actions介绍
是用来生成基本基本aciton type函数模板代码，是一个action creator，同时，它的handleactions可以简化reducers的写法，不用那么多switch
