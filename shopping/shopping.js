class ShoppingCart{

    constructor(){
        this.bin = document.getElementsByClassName("bin");
        this.product = document.getElementsByClassName("cart-item")
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

        this.setTotal(); 

    }

    removeItem(e){
        console.log("here")
        console.log(e.target.parentNode.parentNode.parentNode)
        e.target.parentNode.parentNode.parentNode.remove();

        this.setTotal(); 

    }

}

const cart = new ShoppingCart();

cart.setTotal()




for(const item of cart.itemQuantity) {
    item.addEventListener("change", (e)=>{
        cart.updateTotal(item.value, e);
})
    
}; 


for(const bin of cart.bin){
    bin.addEventListener("click", (e)=>{ // Remove an item when the bin icon is clicked 
        cart.removeItem(e); 
    }
)}




