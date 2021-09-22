const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    mode: 'development',
    module : {
        rules: [ // aqui se cargan los loader
            {
                //test -> que tengo que buscar
                test: /\.html$/, // REGEX -> Busca todos los archivo que terminen en html
                // use -> de los archivos que encuentre que loader usare
                use: [
                    {
                        loader: "html-loader", // Traduce HTML para que webpack lo entienda
                        options: {minimize: true}  // Minifica los archivos HTML encontrados
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [// el order si importa
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                    ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, // ignora node_modules
                use: {  
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(png|jpg|svg|gif|jpeg)$/,
                use: [
                    "file-loader"
                ]
            }
        ]
    },
    plugins : [ // Aqui se cargan los plugins de webpack
        new HtmlWebpackPlugin({
            template:  "./src/index.html", // que archivo es la raiz de mi proyecto
            filename: "./index.html" // que archivo va a generar con los HTMLS
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css", // webpack se encargara de poner el nombre
            chunkFilename: "[id].css" // separa el css en pedacitos para ejecutar solo en necesario
        })
    ] // webpack asume que trabaja en la caperta ./dis -> por lo tanto no es necesario espesificar
} 