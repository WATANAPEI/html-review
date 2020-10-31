const path = require("path");

module.exports = (env, argv) => {
    return {
        entry: "./src/index.ts",
        //alias not to overwrite prod js
        output: {
            filename: (argv.mode == "production") ? "[name].js" : "[name]_dev.js"
        },
        //output source map
        devtool: (argv.mode == "production") ? false : "inline-source-map",
        resolve: {
            extensions: [".ts"],
            modules: [path.resolve(__dirname, "src"), "node_modules"]
        },
        module: {
            rules: [
                {
                    //target extension
                    test: /\.ts$/,
                    // compiler
                    use: "ts-loader",
                    exclude: /node_modules/,
                }
            ]
        }
    };
}