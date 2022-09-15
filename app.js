const shoppingCart = document.querySelectorAll(".put-in-cart-action span")
const shoppingBuy = document.querySelectorAll(".buy-action span")
const shoppingShare = document.querySelectorAll(".share-action span")

for(const cart of shoppingCart){
    cart.addEventListener("click", ()=>{
        console.log("cart")
    })
}


for(const buy of shoppingBuy){
    buy.addEventListener("click", ()=>{
        console.log("buy")
    })
}
for(const share of shoppingShare){
    share.addEventListener("click", ()=>{
        console.log("share")
    })
}
