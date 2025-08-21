let products = [];

function inputvalue() {
    let fileInput = document.getElementById('file');
    let img = fileInput.files[0]; 
    let url = URL.createObjectURL(img);
    let name = document.getElementById('name').value;
    let price = parseFloat(document.getElementById('price').value).toFixed(2);
    let desc = document.getElementById('description').value;
    if (!img || name === '' || price === '' || desc === '') {
        alert('Plz! enter correct values');
    }
    products.push({ url, name, price, desc });
    document.getElementById('file').value = '';
    document.getElementById('name').value = '';
    document.getElementById('price').value = '';
    document.getElementById('description').value = '';
    display();
}
function display() {
    let prolist = document.querySelector('.Productlist');
    prolist.innerHTML = '';
    products.forEach(product => {
        let pro = document.createElement('div');
        pro.className = 'Product';
        pro.innerHTML = `
            <img src="${product.url}" alt="Product Image">
            <h2>${product.name}</h2>
            <h4>$${product.price}</h4>
            <p>${product.desc}</p>
        `;
        prolist.appendChild(pro);
    });
}
function filterByPrice(amount){
    let prolist = document.querySelector('.Productlist');
    prolist.innerHTML = '';
    for(let i=0;i<=products.length;i++){
        if(products[i].price<=amount){
        let pro = document.createElement('div');
        pro.className = 'Product';
        pro.innerHTML = `
            <img src="${products[i].url}" alt="Product Image">
            <h2>${products[i].name}</h2>
            <h4>$${products[i].price}</h4>
            <p>${products[i].desc}</p>
        `;
        prolist.appendChild(pro);

    
}}}
