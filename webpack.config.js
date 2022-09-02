const HtmlWebpackPlugin = require("html-webpack-plugin") // html webpack pluginini require ettik.
const path = require("path")
const past = require("path") //nodeJs tarafından
const MiniCssExtractPlugin=require("mini-css-extract-plugin")

module.exports={
    mode: "development",
    entry:{
        index: path.resolve(__dirname, "src","main.js")
    },//aldığı entry i nereye output edecek onu seçiyoruz
    output:{
        path: path.resolve(__dirname, "dist"),
        //filename: "[name].[contenthash].bundle.js"
        filename: "bundle.js"
    },
    module:{
        rules:[
            {
                test:/\.(sa|sc|c)ss$/i,
                //use: ["style-loader","css-loader","sass-loader"]
                use:[MiniCssExtractPlugin.loader,"css-loader"]
            },
            {
                test: /\js$/, //.js dosyalarını
                exclude: /node_modules/, //node_modulesi hariç tut.
                use: ["babel-loader"]
            }
        ]
    },
    plugins:[   //plugin'i belirledik
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src","index.html") //istediği template i src klasöründeki index.html i resolve edicek
        }),
        new MiniCssExtractPlugin()
    ]
}