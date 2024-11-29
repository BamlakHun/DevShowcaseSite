// A function declaretion

    async function loadJsonandDisplay() {

    let rawData = await fetch ('/products.json');

    let products = await rawData.json();

    let html = '';

        for (let product of products) {
        html += `
    <article class="product">
        <h3>${product.productName}</h3>
        <p>${product.description}</p>
        <p>Price: ${product.price} SEK</p>
    </article>  
        
        
        `;
     }
     
     document.querySelector('.products').innerHTML = html;
     
}
