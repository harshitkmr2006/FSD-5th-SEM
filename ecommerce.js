const productsContainer = document.getElementById("products-container");

let cart = JSON.parse(localStorage.getItem("cart")) || [];


fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {

        products.forEach(product => {

            const div = document.createElement("div");

            const img = document.createElement("img");
            img.src = product.image;
            img.alt = product.title;


            const title = document.createElement("h1");
            title.innerText = product.title;


            const price = document.createElement("h2");
            price.innerText = "$" + product.price;


            const incrementBtn = document.createElement("button");
            incrementBtn.innerText = "+";


            const decrementBtn = document.createElement("button");
            decrementBtn.innerText = "-";


            const addItemBtn = document.createElement("button");


            let existingProduct = cart.find(item => item.id === product.id);

            let quantity = existingProduct ? existingProduct.quantity : 0;


            if (quantity > 0) {
                addItemBtn.innerText = "Added: " + quantity;
            } else {
                addItemBtn.innerText = "ADD";
            }


            addItemBtn.addEventListener("click", function () {

                quantity++;

                addToCart(product, quantity);

                addItemBtn.innerText = "Added: " + quantity;

            });


            incrementBtn.addEventListener("click", function () {

                quantity++;

                addToCart(product, quantity);

                addItemBtn.innerText = "Added: " + quantity;

            });


            decrementBtn.addEventListener("click", function () {

                if (quantity > 0) {

                    quantity--;

                    if (quantity === 0) {

                        removeFromCart(product.id);

                        addItemBtn.innerText = "ADD";

                    } else {

                        addToCart(product, quantity);

                        addItemBtn.innerText = "Added: " + quantity;

                    }

                }

            });


            div.appendChild(img);
            div.appendChild(title);
            div.appendChild(price);
            div.appendChild(incrementBtn);
            div.appendChild(decrementBtn);
            div.appendChild(addItemBtn);

            productsContainer.appendChild(div);

        });

    })
    .catch(error => {
        console.log("Error:", error);
    });



function addToCart(product, quantity) {

    let existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {

        existingProduct.quantity = quantity;

    } else {

        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: quantity
        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

}



function removeFromCart(productId) {

    cart = cart.filter(item => item.id !== productId);

    localStorage.setItem("cart", JSON.stringify(cart));

}