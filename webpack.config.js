var path  = require('path')
var webpack= require('webpack');

var commonsPlugin=new webpack.optimize.CommonsChunkPlugin({
   filename:'shared.bundle.js',
   minChunks:2
});
var providePlugin=new webpack.ProvidePlugin({
    $:"jquery"
})
module.exports={
    context:path.resolve('src'),
    entry:{
        app:'./app.js',
        services:'./services.js'
    },
    output:{
        path:path.resolve('build'),
        filename:'[name].bundle.[hash].js'
    },
    plugins:[
        commonsPlugin,
        providePlugin
    ],
    watch:false
}
