export const loadStore = () => {
  try {
    const store = localStorage.getItem('store');
    if (store === null) return undefined;
    return JSON.parse(store);
  } catch (e) {
    return undefined;
  }
}

export const saveStore = (store) => {
  try {
    localStorage.setItem('store', JSON.stringify(store));
  } catch (e) {
    console.log("Couldn't save the store to local storage!");
    throw e;
  }
}

export const eraseFromStore = (key = 'store') => {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.log("Couldn't remove item from the store");
    throw e;
  }
}