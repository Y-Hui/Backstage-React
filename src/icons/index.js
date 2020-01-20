const requireAll = (requireContext) => requireContext.keys().map(requireContext)

// 导入 svg 文件夹下所有 .svg 文件
const req = require.context('./svg', true, /\.svg$/)
requireAll(req)
