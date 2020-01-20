/* eslint-disable */


/**
 * Manage the how Access Tokens are being stored and retreived from storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instace.
 **/
const TOKEN_KEY = 'auth_token'

const TokenService = {

    getToken() {
        return localStorage.getItem(TOKEN_KEY)
    },

    saveToken(accessToken) {
        localStorage.setItem(TOKEN_KEY, accessToken)
    },

    removeToken() {
        localStorage.removeItem(TOKEN_KEY)
    },
}

const StorageService = {
    get(key) {
        return localStorage.getItem(key)
    },

    set(key, val) {
        localStorage.setItem(key, val)
    },

    remove(key) {
        localStorage.removeItem(key)
    },
}

export default { TokenService, StorageService }
