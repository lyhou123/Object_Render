import { Product } from "../data/product.js";
import { cardComponent } from "../js/js.js";
let card=document.getElementById('card')
Product.map((pro)=>{
    card.innerHTML+=cardComponent(pro)
})


