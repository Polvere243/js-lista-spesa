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


// provo a stampare in pagina col template literal prima col ciclo for

const list = document.createElement("ul");

While (list < listOfProducts.length) {
    
    let item = document.createElement("li");
    item.append(listOfProducts[i]);
    i++;
    
}



list.classList.add("list");

section.appendChild(list);

