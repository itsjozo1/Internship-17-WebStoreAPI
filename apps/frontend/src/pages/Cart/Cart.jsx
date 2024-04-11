import UserHeader from '../../components/UserHeader/UserHeader';

function Cart() {
  const user = JSON.parse(localStorage.getItem('user'));
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  fetch(`/api/cart-products/${cart.cartId}`, {
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
      console.log(data);
    })
    .catch((error) => {
      console.error('Error fetching cart products:', error);
      return false;
    });

  return (
    <>
      <UserHeader />
      <div>
        <h1>Cart</h1>
      </div>
    </>
  );
}

export default Cart;
