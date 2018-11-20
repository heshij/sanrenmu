const express = require('express');
const app = express();
let classifyJson = require('./src/data/classify.json');
let apiRoutes = express.Router()
app.use('/api', apiRoutes)
module.exports = {
    css: {
        loaderOptions: {
            css: {
                // options here will be passed to css-loader
            },
            postcss: {
                // options here will be passed to postcss-loader
                plugins: [require('postcss-px2rem')({
                    remUnit: 75
                })]
            }
        }
    },
    devServer: {
        before(app) {
            app.get('/api/classifyJson', function(req, res){
                res.json({
                    errno: 0,
                    data: classifyJson
                })
            })
        },
        host: '0.0.0.0',
        port: 8080
    }
};
