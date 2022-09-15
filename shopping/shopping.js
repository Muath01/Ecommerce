class ShoppingCart{

    constructor(){
        this.bin = document.getElementById("bin");
        this.product = document.getElementsByClassName("item-container")[0]
        this.itemQuantity = document.getElementById("item-quantity")
        this.totalPrice = document.getElementById("total-price");
        this.itemPrice = document.getElementById("item-price");

    }

    updateTotal(){
        console.log("fd", this.itemQuantity) 
        const total = parseFloat(this.itemPrice.innerText) * this.itemQuantity.value;
        this.totalPrice.innerText = "£" + total;
        console.log(total)
    }

    removeItem(){
        this.product.style.visibility = "hidden"
    }

}
const cart = new ShoppingCart();

cart.itemQuantity.addEventListener("click", ()=>{
    cart.updateTotal()
})


cart.bin.addEventListener("click", ()=>{
    cart.removeItem();
})



