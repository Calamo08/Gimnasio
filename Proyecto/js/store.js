document.addEventListener('DOMContentLoaded', () => {
  const cart = [];
  const cartItemsElement = document.querySelector('.cart-items');
  const cartTotalElement = document.getElementById('cart-total');

  
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
      const productElement = event.target.closest('.product');
      const productId = productElement.dataset.id;
      const productName = productElement.dataset.name;
      const productPrice = parseFloat(productElement.dataset.price);

      // Add or Update Product in Cart
      const existingProduct = cart.find(item => item.id === productId);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
      }

      updateCart();
    });
  });

  
  function updateCart() {
    // Clear Cart Display
    cartItemsElement.innerHTML = '';

    // Add Cart Items
    let total = 0;
    cart.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `
        ${item.name} - €${item.price.toFixed(2)} x ${item.quantity}
        <button class="remove-item" data-id="${item.id}">Remove</button>
      `;
      cartItemsElement.appendChild(li);
      total += item.price * item.quantity;
    });

    
    cartTotalElement.textContent = total.toFixed(2);

    
    document.querySelectorAll('.remove-item').forEach(button => {
      button.addEventListener('click', (event) => {
        const productId = event.target.dataset.id;
        removeFromCart(productId);
      });
    });
  }

  
  function removeFromCart(productId) {
    const productIndex = cart.findIndex(item => item.id === productId);
    if (productIndex > -1) {
      cart.splice(productIndex, 1);
    }
    updateCart();
  }

  // Checkout Button
  document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
    } else {
      alert('Thank you for your purchase!');
      cart.length = 0; // Clear Cart
      updateCart();
    }
  });
});
