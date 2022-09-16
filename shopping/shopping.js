class ShoppingCart{

    constructor(){
        this.bin = document.getElementById("bin");
        this.product = document.getElementsByClassName("item-container")[0]
        this.itemQuantity = document.getElementsByClassName("item-quantity")
        this.subTotal = document.getElementById("total-price");
        this.itemPrice = document.getElementsByClassName("item-price");
        this.priceArray = [];// will hold the prices of each item. 
        this.total;
 
    }

    setTotal(){ // sets the subtotal of the cart by looping over all of them items. 

        this.priceArray = []; // Clear the array every time this function is called so the subTotal is recalculated 

        for(const price of cart.itemPrice){

            this.priceArray.push(parseFloat(price.innerText)) //used PriceFloat instead of parseInt to turn the strings into float numbers, and use the reduce method on them. 
        }

        let totalValue = this.priceArray.reduce((total, item)=>{
            return total + item;
        }, 0) 

        this.subTotal.innerText = "£" + Math.round(totalValue * 100) / 100;

        
    }

    updateTotal(quantiy,e){
        
        const targetPrice = e.target.parentNode.parentNode.querySelector(".item-price") // Go up the node list to get the clicked item price, the e represent the click event. 
        
        targetPrice.innerText = quantiy * parseFloat(targetPrice.value); // The price value stays the same, but inner text changes. 

        this.setTotal(); //Call this function to reset the subTotal
        
    }

    removeItem(){
        this.product.style.visibility = "hidden"
    }

}

const cart = new ShoppingCart();

cart.setTotal()




for(const item of cart.itemQuantity) {
    item.addEventListener("change", (e)=>{
        cart.updateTotal(item.value, e);
})
    
}; 


cart.bin.addEventListener("click", ()=>{ // Remove an item when the bin icon is clicked 
    cart.removeItem(); 
})



