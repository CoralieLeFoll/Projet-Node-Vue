import CryptoJS from 'crypto-js'
const key = '82f2ceed4c503896c8a291e560bd4325'
const iv = 'sinasinasisinaaa'

export default class Crypto {
    aesEncrypt = function(txt) {
        const cipher = CryptoJS.AES.encrypt(txt, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(iv),
        mode: CryptoJS.mode.CBC
        })

        return cipher.toString()
    }

    aesDencrypt = function(txt) {
        const cipher = CryptoJS.AES.decrypt(txt, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(iv),
        mode: CryptoJS.mode.CBC
        })

        return CryptoJS.enc.Utf8.stringify(cipher).toString()
    }
}