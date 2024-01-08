// recupero l'elemento dal DOM
const section = document.querySelector("section");


// dichiaro un array colla lista della spesa
const listOfProducts = ["patatine fritte",
                        "cereali", 
                        "prodotti senza glutine", 
                        "fettine di petto di pollo", 
                        "latte", 
                        "insalata", 
                        "pizze", 
                        "supplì",
                        "zucchero di canna",
                        "filetti di pesce",
                        "sale grosso",
                        "cardamomo" ]
console.table(listOfProducts);

/* provo a stampare in pagina col template literal prima col ciclo for
    poi col ciclo while
 */ 
let shoppingList = `<ul class="list">`;
let i = 0;
while (i < listOfProducts.length) {
    let listItems = `<li>${listOfProducts[i]}</li>`;
    shoppingList += listItems;
    i++;
}

shoppingList += `</ul>`;

section.innerHTML = shoppingList;