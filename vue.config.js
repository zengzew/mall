module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: { //代理
            '/api': { //当拦截到/api的时候代理到target
                target: 'http://mall-pre.springboot.cn',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ' '
                }
            }
        }
    },
    productionSourceMap: true,
    chainWebpack: (config) => {
        config.plugins.delete('prefetch');
    }
}