const translate = require('@vitalets/google-translate-api');

module.exports = function(text, options) {
    return new Promise((resolve, reject)=> {
        // translate is case sensitive
        if (options?.to == 'zh-tw') options.to = 'zh-TW'
        translate(text, options).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err.message)
        })
    })
}