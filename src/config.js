'use strict';

const alfy = require('alfy');
const { v4:uuid } = require('uuid');
const CryptoJS = require('crypto-js')
module.exports = {
    youDaoApi: 'https://openapi.youdao.com/api',
    getParams: function () {
        const salt = uuid();
        const curtime = Math.round(new Date().getTime()/1000);
        const key = 'Gj6i5mijRxOiXyoQ5TY4RwOFI51UhipB'
        const appKey = "3d5537600c026dc2";
        const q = alfy.input
        const sign = CryptoJS.SHA256(`${appKey}${q}${salt}${curtime}${key}`).toString(CryptoJS.enc.Hex)
        return {
            query: {
                appKey,
                salt,
                curtime,
                sign,
                signType:'v3',
                q,
                from:'auto',
                to:'auto',
            }
        }
    },
    filter: {
        prep: [
            'and', 'or', 'the', 'a', 'at', 'of'
        ],
        prefix: [],
        suffix: [
            'ing', 'ed', 'ly'
        ],
        verb: [
            'was'
        ]
    }
};
