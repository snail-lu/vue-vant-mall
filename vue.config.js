const path = require('path') //引入path模块
function resolve(dir) {
	return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}

// 判断是否是生产环境
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
	publicPath: isProd ? '/vue-vant-mall/' : '/', // 默认为'/'
	outputDir: 'build',

	// 放置生成的静态资源(js、css、img、fonts)的目录。
	assetsDir: 'static',

	// 指定生成的 index.html 的输出路径
	indexPath: 'index.html',

	// 是否使用包含运行时编译器的 Vue 构建版本。
	runtimeCompiler: false,

	transpileDependencies: [],

	// 如果你不需要生产环境的 source map
	productionSourceMap: false,

	// 配置css
	css: {
		// 是否使用css分离插件 ExtractTextPlugin
		extract: isProd,
		sourceMap: true,
		// css预设器配置项
		loaderOptions: {},
		// 启用 CSS modules for all css / pre-processor files.
		requireModuleExtension: true
	},
	chainWebpack: (config) => {
		//路径别名设置，set第一个参数：设置的别名，第二个参数：设置的路径
		config.resolve.alias
			.set('@', resolve('./src')) //根据目录的层级来决定，也可以自行设
			.set('@components', resolve('./src/components'))
			.set('@views', resolve('./src/views'))
			.set('@assets', resolve('./src/assets'))
			.set('@utils', resolve('./src/utils'))

		config.plugin('html').tap((args) => {
			args[0].title = '商城'
			return args
		})
	},
	pluginOptions: {
		// 使用第三方插件进行全局样式文件引入
		'style-resources-loader': {
			preProcessor: 'scss',
			patterns: [
				path.resolve(__dirname, './src/styles/index.scss'),
				path.resolve(__dirname, './src/styles/variables.scss'),
				path.resolve(__dirname, './src/styles/mixin.scss')
			]
		}
	},
	devServer: {
		proxy: {
			// 匹配规则
			'/api': {
				// 要访问的跨域的域名
				target: 'http://xxx.com/',
				ws: true,
				secure: false, // 使用的是http协议则设置为false，https协议则设置为true
				changOrigin: true, //开启代理
				pathRewrite: {
					'^/api': '/api'
				}
			}
		}
	}
}
