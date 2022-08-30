const name = 'vaishali';
const userAge = 28;

const user = {
    name, // shothand property
    age:userAge,
    location:'pune'
}


// Destructuring 

const product = {
    label:'Red Book',
    price:10,
    stock:200,
    salePrice:undefined,
    rating:4.2
}

//const label = product.label;
//const price = product.price;

const {label:productlabel, stock, rating = 4} = product;
console.log(label) // error access it as productlabel console.log(productlabel)
console.log(Stock)
console.log(rating) // 4.2 default 5

const transaction = (type, {label, stock, price}) => {
    console.log(label, stock, price);
}

transaction('order', product);