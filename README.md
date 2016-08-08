# reduxDemo
一个基于React-Router和redux，react-redux,redux-thunk, immutable的单页面训练项目
## 搭建部署
本项目使用fis和webpack进行
## 路由，视图，数据流
视图：本项目视图层使用react组件来组装；
路由：本项目路由使用react-router;
数据流：本项目数据流管理使用redux。主要分布在actions，reducers，store目录下，constants目录下保存action的type静态常量（在小项目中可以直接使用字符串，但是当项目复杂时字符串不利于管理，因此保存在constants目录下比较好）
