const path = require("path");

// console.log(path.resolve(__dirname, "src/assets/css/toolcss_mixin.less"))
module.exports = {
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, "./src/assets/css/toolcss_mixin.less")
            ]
        }
    }
};
