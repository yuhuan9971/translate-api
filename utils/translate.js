const translate = require('@vitalets/google-translate-api');

translate('你好', {to: 'en'}).then(res => {
    console.log(res.text);
    //=> I speak English
    console.log(res.from.language.iso);
    //=> nl
}).catch(err => {
    console.error(err);
});

module.exports = function(text, options) {
    return new Promise((resolve, reject)=> {
        translate(text, options).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err.message)
        })
    })
}