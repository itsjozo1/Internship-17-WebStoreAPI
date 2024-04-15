const getProducts = async (selectedCategory, limit) => {
  try {
    let baseUrl = '/api/products';
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
};

const getProductById = async (productId) => {
  try {
    const response = await fetch(`/api/products/${productId}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getCategories = async () => {
  try {
    const response = await fetch('/api/products');
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
};

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

const getCartProducts = async (productId) => {
  try {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartId = cart.cartId;
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      return false;
    }

    const response = await fetch(`/api/cart-products/${cartId}/${productId}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const data = await response.json();
    if (data.error) {
      console.log(data.message);
    }

    let isEmpty = data.length === 0;
    return isEmpty;
  } catch (error) {
    console.error('Error fetching cart products:', error);
    return false;
  }
};

const getAllCartsProducts = async () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const user = JSON.parse(localStorage.getItem('user'));

  return fetch(`/api/cart-products/cart/${cart.cartId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        console.log(data.message);
      }
      return data;
    })
    .catch((error) => {
      console.error('Error fetching cart products:', error);
      return false;
    });
};

const updateCartProduct = async (cartProductId, quantity) => {
  const user = JSON.parse(localStorage.getItem('user'));

  return fetch(`/api/cart-products/${cartProductId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    },
    body: JSON.stringify({ quantity }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        console.log(data.message);
      }
    })
    .catch((error) => {
      console.error('Error updating cart product:', error);
    });
};

const deleteCartProduct = async (cartProductId) => {
  const user = JSON.parse(localStorage.getItem('user'));

  return fetch(`/api/cart-products/${cartProductId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        console.log(data.message);
      }
    })
    .catch((error) => {
      console.error('Error deleting cart product:', error);
    });
};

const getWishlistProduct = async (productId) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const wishlist = JSON.parse(localStorage.getItem('wishlist'));

  return await fetch(
    `/api/wishlist-products/${wishlist.wishlistId}/${productId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    },
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.error) {
        console.log(data.message);
      }
      return data;
    })
    .catch(() => {
      return false;
    });
};

const getWishlistProducts = async () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const wishlist = JSON.parse(localStorage.getItem('wishlist'));

  return await fetch(`/api/wishlist-products/wishlist/${wishlist.wishlistId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.error) {
        console.log(data.message);
      }
      return data;
    })
    .catch((error) => {
      console.error('Error fetching wishlist products:', error);
    });
};

const deleteWishlistProduct = async (wishlistProductId) => {
  const user = JSON.parse(localStorage.getItem('user'));

  return fetch(`/api/wishlist-products/${wishlistProductId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        console.log(data.message);
      }
    })
    .catch((error) => {
      console.error('Error deleting wishlist product:', error);
    });
};

const postOrder = async (total) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const cart = JSON.parse(localStorage.getItem('cart'));

  return fetch(`/api/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    },
    body: JSON.stringify({
      userId: cart.cartId,
      total: total,
      status: 'completed',
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        console.log(data.message);
      }
      return data;
    })
    .catch((error) => {
      console.error('Error posting order:', error);
    });
};

const postOrderProducts = async (orderId, productId, quantity) => {
  const user = JSON.parse(localStorage.getItem('user'));

  return fetch(`/api/order-products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    },
    body: JSON.stringify({
      orderId: orderId,
      productId: productId,
      quantity: quantity,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        console.log(data.message);
      }
    })
    .catch((error) => {
      console.error('Error posting order products:', error);
    });
};

const getAllOrdersByUserId = async () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return fetch(`/api/orders/user/${user.id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        console.log(data.message);
      }
      return data;
    })
    .catch((error) => {
      console.error('Error fetching orders:', error);
    });
};

const getProductOrdersByOrder = async (orderId) => {
  const user = JSON.parse(localStorage.getItem('user'));

  return fetch(`/api/order-products/order/${orderId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        console.log(data.message);
      }
      return data;
    })
    .catch((error) => {
      console.error('Error fetching product orders:', error);
    });
};

export {
  getProducts,
  getCategories,
  getWishlist,
  getCart,
  getCartProducts,
  getAllCartsProducts,
  getProductById,
  updateCartProduct,
  deleteCartProduct,
  getWishlistProduct,
  getWishlistProducts,
  deleteWishlistProduct,
  postOrder,
  postOrderProducts,
  getAllOrdersByUserId,
  getProductOrdersByOrder,
};
