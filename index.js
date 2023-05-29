let products = [];

let u = prompt("How many products want to add");

for (i = 0; i < u; i++) {

    let name = prompt("Enter the product name");
    let model = prompt("Enter product model");
    let img = prompt("Enter product image");

    let pro = { name, model, img };

    products.push(pro);

    console.log(products);

}
