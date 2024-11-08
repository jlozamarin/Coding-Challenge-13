// Task 1: Setup Basic HTML Structure for Product Page (index.html)

// Task 2: Fetch Products from the API Using Fetch and Promises
const productList = document.getElementById('productList');
const errorMessageContainer = document.getElementById('error-message');

fetch('https://www.course-api.com/javascript-store-products') // getting data from the API
    .then(response => {
        if (!response.ok) {
            throw new Error('Unable to load product details; please try again later.'); // error handling 
        }
        return response.json(); // converting the response to JSON
    })
    .then(products => {
        products.forEach(product => { 
            const listItem = document.createElement('li');

// Task 3: Display Product Details Dyanmically
            listItem.innerHTML = `
          <h2>${product.fields.name}</h2> 
                <p><strong>Company:</strong> ${product.fields.company}</p> 
                <p><strong>Price:</strong> $${product.fields.price}</p> 
                <img src="${product.fields.image[0].url}" alt="${product.fields.name}" style="width: 200px; height: 200px;">
            `; 
            productList.appendChild(listItem);  // appending the list item to the product list
        });
    })
    // Task 4: Handle Errors Gracefully
    .catch(error => {
        console.error('Problem occurred while fetching data:', error); // error handling
        errorMessageContainer.textContent = "Failed to load products. Please try again later."; // display error message
    });
