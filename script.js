
    let total = 0;
    let cartItems = [];

    function addToCart(item, price) {
      cartItems.push({item, price});
      const cartList = document.getElementById('cart-list');
      const li = document.createElement('li');
      li.textContent = `${item} - ₹${price}`;
      cartList.appendChild(li);
      total += price;
      document.getElementById('total').textContent = total;
    }

    function placeOrder(event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const address = document.getElementById('address').value;
      const phone = document.getElementById('phone').value;

      if(cartItems.length === 0) {
        alert("Your cart is empty!");
        return;
      }document.getElementById('order-message').textContent =
        `Thank you ${name}! Your order has been placed. Delivery to ${address}. 📞 ${phone}`;
      
      // Reset cart
      cartItems = [];
      total = 0;
      document.getElementById('cart-list').innerHTML = "";
      document.getElementById('total').textContent = "0";
      document.querySelector("form").reset();
    }