// JavaScript for adding items to the cart

// Function to add an item to the cart
function addToCart(product) {
    // Initialize the cart array or retrieve it from local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the product to the cart
    cart.push(product);

    // Update the cart in local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Display a confirmation message (you can customize this)
    alert('Item added to the cart');
}

// Add event listeners to all "Add to Cart" buttons on the page
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
        const name = this.getAttribute('data-name');
        const price = parseFloat(this.getAttribute('data-price'));
        addToCart({ name, price });
    });
});



// JavaScript for displaying cart items on cart.html

// Function to display the cart items on the cart.html page
function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart'));

    if (cartItems) {
        const cartItemsContainer = document.getElementById('cart-items');
        cartItems.forEach(item => {
            const row = cartItemsContainer.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            cell1.innerHTML = item.name;
            cell2.innerHTML = '₹' + item.price;
        });
    }
}

// Call the displayCart function when the cart.html page loads
if (window.location.pathname.includes('cart.html')) {
    displayCart();
}

