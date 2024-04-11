const getProducts = async (selectedCategory, limit) => {
    try {
        let baseUrl = "/api/products";
        const response = await fetch(baseUrl);
        const json = await response.json();
        if (selectedCategory) {
            return json.filter((product) => product.category === selectedCategory);
        }
        if (limit) {
            return json.slice(0, limit);
        }
        return json;
    } catch (error) {
        console.error(error);
        throw error;
    }
}



const getCategories = async () => {
    try {
        const response = await fetch("/api/products");
        const json = await response.json();
        let categories = [];
        json.forEach((element) => {
            if (!categories.includes(element.category)) {
                categories.push(element.category);
            }
        });
        return categories;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const getWishlist = (userId) => {
    fetch(`/api/wishlists/user/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.error(data.message);
        } else {
          if (localStorage.getItem('wishlist')) {
            localStorage.removeItem('wishlist');
          }
          localStorage.setItem('wishlist', JSON.stringify(data));
        }
      })
      .catch((error) => {
        console.error('Error getting wishlist:', error);
      });
  };

  const getCart = (userId) => {
    fetch(`/api/carts/user/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.error(data.message);
        } else {
          if (localStorage.getItem('cart')) {
            localStorage.removeItem('cart');
          }
          localStorage.setItem('cart', JSON.stringify(data));
        }
      })
      .catch((error) => {
        console.error('Error getting cart:', error);
      });
  };

  

export { getProducts, getCategories, getWishlist, getCart};
