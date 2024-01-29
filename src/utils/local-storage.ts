const FAVORITES_KEY = 'favorites';

export const getFavorites = () => {
  const favorites = localStorage.getItem(FAVORITES_KEY);
  if (favorites) {
    return JSON.parse(favorites);
  }
  return [];
};

export const addToFavorites = (id: string) => {
  const favoritesRecord = localStorage.getItem(FAVORITES_KEY);

  let favorites = null

  if (favoritesRecord) {
     favorites = new Set(JSON.parse(favoritesRecord));
  } else {
    favorites = new Set([]);
  }

  // Add to set, resolve duplicates automatically
  favorites.add(id);
  // Save to local storage
  localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites]));
}

export const removeFromFavorites = (id: string) => {
  const favoritesRecord = localStorage.getItem(FAVORITES_KEY);
  // if there is such record
  if (favoritesRecord) {
    const favorites = new Set(JSON.parse(favoritesRecord));
    // delete ii
    favorites.delete(id);
    // set the new state
    localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites]));
  }
}
