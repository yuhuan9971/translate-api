const translate = require('@vitalets/google-translate-api');

module.exports = function(text, options) {
    return new Promise((resolve, reject)=> {
        translate(text, options).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err.message)
        })
    })
}