const TOKEN_KEY = 'authorisation'

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export const isLoggedIn = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }
    return false;
}