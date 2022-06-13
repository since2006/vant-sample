const {defineConfig} = require('@vue/cli-service')
const path = require('path')
const webpack = require('webpack')
const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

function resolve(dir) {
    return path.join(__dirname, dir)
}

function getBuildVersion() {
    const date = new Date();
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    dd = dd < 10 ? '0' + dd : dd;
    mm = mm < 10 ? '0' + mm : mm;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return yyyy + '' + mm + '' + dd + '.' + hours + '' + minutes + '' + seconds;
}

const definePlugin = new webpack.DefinePlugin({
    'BUILD_VERSION': JSON.stringify(getBuildVersion())
})

module.exports = defineConfig({
    transpileDependencies: true,
    productionSourceMap: false,
    publicPath: process.env.VUE_APP_CTX_PATH,

    configureWebpack: {
        plugins: [
            definePlugin,
            ComponentsPlugin({
                resolvers: [VantResolver()],
            })
        ]
    },

    chainWebpack: (config) => {
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('@layout', resolve('src/layout'))
            .set('@epp', resolve('src/epp'))
            .set('@api', resolve('src/api'))

        // typescript 支持
        config
            .resolve.extensions.add('.ts').add('.tsx')
            .end().end()
            .module
            .rule('typescript')
            .test(/\.tsx?$/)
            .use('babel-loader')
            .loader('babel-loader')
            .end()
            .use('ts-loader')
            .loader('ts-loader')
            .options({
                transpileOnly: true,
                appendTsSuffixTo: [
                    '\\.vue$'
                ],
                happyPackMode: false
            })
            .end()
    },

    devServer: {
        port: 8080,
        allowedHosts: ['local.biq.cat'],
        proxy: {
            [process.env.VUE_APP_API_PATH]: {
                target: 'http://localhost:8000',
                changeOrigin: true,
                pathRewrite: path => path.replace(new RegExp('^' + process.env.VUE_APP_API_PATH), '')
            },
            '/prod-api': {
                target: 'https://biq.cat',
                changeOrigin: true
            }
        }
    }

})
