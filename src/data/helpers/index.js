const storageAvailable = type => {
    try {
      const storage = window[type],
        x = '__storage_test__'
      storage.setItem(x, x)
      storage.removeItem(x)
      return true
    } catch (e) {
      return e
    }
  },

  checkFavoriteExists = (id, list) => list.findIndex(l => l.id === id)

export { storageAvailable, checkFavoriteExists }
