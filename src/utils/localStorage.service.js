const saveToStorage = (key, value)=>{
    localStorage.setItem(key, JSON.stringify(value))
}

const loadFromStorage = (key)=>{
    const value = localStorage.getItem(key);
    return JSON.parse(value);
}

export const storageService = {
    saveToStorage,
    loadFromStorage
}