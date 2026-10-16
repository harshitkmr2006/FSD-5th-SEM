const cartContainer = document.getElementById("cart-container");
const totalElement = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {

    cartContainer.innerHTML = "";

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p id='empty-cart'>Your cart is empty.</p>";
        totalElement.innerText = "Total: $0";
        return;
    }

    let total = 0;

    cart.forEach(item => {

        const div = document.createElement("div");
        div.className = "cart-item";

        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.title;

        const title = document.createElement("h2");
        title.innerText = item.title;

        const price = document.createElement("p");
        price.innerText = "$" + item.price;

        const quantity = document.createElement("span");
        quantity.innerText = "Quantity: " + item.quantity;

        const increaseBtn = document.createElement("button");
        increaseBtn.innerText = "+";

        const decreaseBtn = document.createElement("button");
        decreaseBtn.innerText = "-";

        const removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove";

        increaseBtn.addEventListener("click", function () {

            item.quantity++;

            saveCart();
            displayCart();

        });

        decreaseBtn.addEventListener("click", function () {

            if (item.quantity > 1) {
                item.quantity--;
            } else {
                cart = cart.filter(product => product.id !== item.id);
            }

            saveCart();
            displayCart();

        });

        removeBtn.addEventListener("click", function () {

            cart = cart.filter(product => product.id !== item.id);

            saveCart();
            displayCart();

        });

        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(quantity);
        div.appendChild(increaseBtn);
        div.appendChild(decreaseBtn);
        div.appendChild(removeBtn);

        cartContainer.appendChild(div);

        total = total + (item.price * item.quantity);

    });

    totalElement.innerText = "Total: $" + total.toFixed(2);
}


function saveCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

}


displayCart();