class ShoppingCart{

    constructor(){
        this.bin = document.getElementsByClassName("bin");
        this.product = document.getElementsByClassName("cart-item")
        this.itemQuantity = document.getElementsByClassName("item-quantity")
        this.subTotal = document.getElementById("total-price");
        this.itemPrice = document.getElementsByClassName("item-price");
        this.test = document.getElementById("subtotal")
        this.priceArray = [];// will hold the prices of each item. 
        this.total;
        this.cartItem = 0;
 
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

    addItemToCart(){
        console.log("hello");
        const cartItem = document.createElement("div")


        const itemContainer = document.querySelector(".item-container");
        
        
        cartItem.classList.add("cart-item", "cart-item-3");

        cartItem.innerHTML= `
        <div class="cart-item cart-item-1">
            <div class="cart-img-container">
                <img src="../img/yellow-watch.jpg" class="cart-product-img">
            </div>
        
        <div id="item-actions">
            <span id="item-text">
            Price: £<option class="item-price" value="7.99">7.99</option>
            </span>

        <div class="bin-select">
            <span class="bin material-symbols-outlined">
                delete
            </span>

        <select class="item-quantity">
                <option selected value="">Select Qauntity</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
        </div>
    </div>
</div>
        
        `
        console.log(this.priceArray)
        itemContainer.appendChild(cartItem)
        itemContainer.appendChild(cartItem.cloneNode(true))
        this.setTotal(); 
        // itemContainer.appendChild(cartItem.cloneNode(true))
        // itemContainer.appendChild(cartItem.cloneNode(true))
        // itemContainer.appendChild(cartItem.cloneNode(true))
        // itemContainer.appendChild(cartItem.cloneNode(true))
        // itemContainer.appendChild(cartItem.cloneNode(true))
        // itemContainer.appendChild(cartItem.cloneNode(true))



    }

}

/*
        <div class="cart-item cart-item-1">
                <div class="cart-img-container">
                    <img src="../img/yellow-watch.jpg" class="cart-product-img">
                </div>
                
            <div id="item-actions">
                <span id="item-text">
                  Price: £<option class="item-price" value="7.99">7.99</option>
                </span>

                <div class="bin-select">
                    <span class="bin material-symbols-outlined">
                        delete
                    </span>
                    <select class="item-quantity">
                        <option selected value="">Select Qauntity</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>
            </div>
        </div>
*/
const cart = new ShoppingCart();

cart.setTotal();
cart.addItemToCart();

console.log(cart.subTotal.innerText)



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








const shoppingCart = document.querySelectorAll(".put-in-cart-action span")
const shoppingBuy = document.querySelectorAll(".buy-action span")
const shoppingShare = document.querySelectorAll(".share-action span")
const shoppingButton = document.querySelector("#shopping")

shoppingButton.addEventListener("click", ()=>{

    const shoppingContainer = document.querySelector(".shopping-container")
    const container = document.querySelector(".container")

    console.log(shoppingContainer.style.display)
    if(shoppingContainer.style.display == "none"){
        console.log("here")
        shoppingContainer.style.display = "block";
        container.style.display = "none";
    }else{
        container.style.display = "grid";
        shoppingContainer.style.display = "none";
    }
})
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
