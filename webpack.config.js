const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


const rulesForImages = {
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: 'asset/resource',
};

const rulesForStyle = {
  test: /\.css$/,
  use: ["style-loader", "css-loader"], // style-loader: cuando encuentra el import en el js lee el style
  //css-loader: cuando termine el loader anterior resuelve los import y require de los archivos del css
};

const rulesForJS = {
  test: /\.js$/, // aqui indicamos los archivos que webpack no entiende
  loader: "babel-loader", //le indicamos porque cargador debe pasar
  options: {
    //aqui indicamos una configuracion de babel para react.
    presets: [
      [
        //le pasamos un array para poder configurar el preset
        "@babel/preset-react",
        {
          runtime: "automatic", //classic
        },
      ], //npm i @babel/core babel-loader @babel/preset-react --save-dev
    ],
  },
};

const rules = [rulesForJS,rulesForStyle,rulesForImages];

module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode === "production";

  return {
    //aqui configuramos donde sera nuestra carpeta de build
    output: {
      filename: isProduction ? "[name].[contenthash].js" : "main.js",
      path: path.resolve(__dirname, "build"),
    },
    //aqui agregamos los plugin los plugins le agregan a webpack una nueva funcionalidad.
    plugins: [new HtmlWebpackPlugin({ template: "src/index.html" })],
    //aqui configuramos los loaders
    module: {
      rules,
    },
    //config server webpack
    devServer: {
      open: true, // abrir navegador
      port: 3000, //puerto
      compress: true, //ni idea se supone que gzip
    },
  };
};
