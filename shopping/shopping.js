


const removeItem = document.getElementById("bin");
const product = document.getElementsByClassName("item-container")[0]
const itemQuantity = document.getElementById("item-quantity")
const totalPrice = document.getElementById("total-price");
const itemPrice = document.getElementById("item-price");


let total;

itemQuantity.addEventListener("click", ()=>{
    total = parseFloat(itemPrice.innerText) * itemQuantity.value;
    totalPrice.innerText = "£" + total;
    console.log(total)
})

removeItem.addEventListener("click", ()=>{

    product.style.visibility = "hidden";
    total = 0;
})