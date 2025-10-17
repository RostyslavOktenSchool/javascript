let products = [

{

title: 'milk',

price: 22,

image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'

},

{

title: 'juice',

price: 27,

image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'

},

{

title: 'tomato',

price: 47,

image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'

},

{

title: 'tea',

price: 15,

image: 'https://shop-cdn1-2.vigbo.tech/shops/220974/products/21980470/images/preview-e6d7f4921ef22f212e805514aac1883f.png'

},

];

for (const element of products) {
    



    document.write(`
        <div class="cards">
        <h3>Product ${element.title}</h3>
        <p>Price ${element.price}</p>
        <img src="${element.image}"  alt = "image">
        </div>
        `)
}