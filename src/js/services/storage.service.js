export const storageService = {
    saveToStorage,
    loadFromStorage,
    removeFromStorage,
    saveToSession,
    loadFromSession,
    removeFromSession
}


// *** LOCAL Storage *** //

function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
}

function loadFromStorage(key) {
    const val = localStorage.getItem(key);
    return JSON.parse(val);
}

function removeFromStorage(key) {
    localStorage.removeItem(key);
}


// *** SESSION Storage *** //

function saveToSession(key, val) {
    sessionStorage.setItem(key, JSON.stringify(val))
}

function loadFromSession(key) {
    const val = sessionStorage.getItem(key);
    return JSON.parse(val);
}

function removeFromSession(key) {
    sessionStorage.removeItem(key)
}