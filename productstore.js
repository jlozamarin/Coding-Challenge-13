// Task 1: Setup Basic HTML Structure for Product Page (index.html)

// Task 2: Fetch Products from the API Using Fetch and Promises
const productList = document.getElementById('productList');

fetch('https://www.course-api.com/javascript-store-products') // getting data from the API
    .then(response => {
        if (!response.ok) {
            throw new Error('Unable to load product details; please try again later.'); // error handling 
        }
        return response.json(); // converting the response to JSON
    })
    .then(products => {
        products.forEach(product => { // Loop through each product
            const listItem = document.createElement('li');
            listItem.textContent = `${product.fields.name} - $${product.fields.price}`; // Access correct properties
            productList.appendChild(listItem); // Append each item to the list
        });
    })
    .catch(error => {
        console.error('Problem occurred while fetching data:', error); // error handling
    });

