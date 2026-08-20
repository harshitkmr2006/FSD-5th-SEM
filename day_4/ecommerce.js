const productsContainer = document.getElementById("products-container");

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
            addItemBtn.innerText = "ADD";

            
            let quantity = 0;

        
            addItemBtn.addEventListener("click", function () {
                quantity++;

                addItemBtn.innerText = "Added: " + quantity;
            });

            
            incrementBtn.addEventListener("click", function () {
                quantity++;

                addItemBtn.innerText = "Added: " + quantity;
            });

            
            decrementBtn.addEventListener("click", function () {

                if (quantity > 0) {
                    quantity--;

                    if (quantity === 0) {
                        addItemBtn.innerText = "ADD";
                    } else {
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