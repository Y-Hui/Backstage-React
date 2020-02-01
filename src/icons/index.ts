// 导入 svg 文件夹下所有 .svg 文件
const svg = require.context('./svg', true, /\.svg$/)

svg.keys().forEach((fileName) => {
  svg(fileName)
})
