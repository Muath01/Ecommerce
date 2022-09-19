class ShoppingCart{

    constructor(){
        this.bin = document.getElementsByClassName("bin");
        this.product = document.getElementsByClassName("cart-item")
        this.itemQuantity = document.getElementsByClassName("item-quantity")
        this.subTotal = document.getElementById("total-price");
        this.itemPrice = document.getElementsByClassName("item-price");
        this.test = document.getElementById("subtotal")
        this.buyNow = document.getElementById("buy-now")
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
        e.target.parentNode.parentNode.parentNode.remove();

        this.setTotal(); 
        divDelete();

    }

    addItemToCart(e){
        // console.log(e.target.parentNode.parentNode.parentNode.querySelector(".number-price"))
        this.imgSrc = e.target.parentNode.parentNode.parentNode.querySelector("img").src;
        this.price = e.target.parentNode.parentNode.parentNode.querySelector(".number-price").innerText;
        this.name = e.target.parentNode.parentNode.parentNode.querySelector(".name-price p");
        this.value = e.target.parentNode.parentNode.parentNode.querySelector(".number-price").dataset.value;
        this.itemAdd = e.target.parentNode.parentNode.parentNode.querySelector(".item-added");

        // console.log("v", value)
        const cartItem = document.createElement("div")

        const itemContainer = document.querySelector(".item-container");
        
        cartItem.classList.add("cart-item", "cart-item-2");

        cartItem.innerHTML= `
            <div class="cart-img-container">
                <img src=${this.imgSrc} class="cart-product-img">
            </div>
        
        <div id="item-actions">
            <span id="item-text">
            Price: £<option class="item-price" value=${this.value}>${this.price}</option>
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

        `
        
        
        console.log(this.priceArray)
        setTimeout(() => {
            this.itemAdd.classList.toggle("item-added-add")
       }, 1000);
       this.itemAdd.classList.toggle("item-added-add")
       
        itemContainer.appendChild(cartItem.cloneNode(true))
        this.setTotal(); 
        divSelect(); // loops of new select item in the cart
        divDelete(); // loops over new delete icons in the cart

    }

    shareNFT(){
        if(navigator.share){
            navigator.share({
                title:"NFT Item",
                text:"Hey Look at this new NFT site I've just found\n", 
                url: "https://localhost/index.html"
            }).then(()=>{
                console.log("Thank you")
            }).catch(console.error)
        }else{
            shareDialog.classList.add("is-open"); // This adds different support for browsers that don't support the navigator api. 
        }
    }
    buyNowDiv(){

        const buyDiv = document.createElement("div");
        const buyDivContainer = document.querySelector(".buy-now-container");


        buyDiv.innerHTML = `
            <div class="buy-now-inner-container">

            <div id="buy-now-img-container">
            <img src="${this.imgSrc}" id="buy-now-img">
            </div>
            <div class="buy-name-price">
            <p>
                Product Name: ${this.name}
            </p>
            <span>
                Price: £<span class="buy-number-price" data-value=${this.value}>${this.price}</span>
            </span>
            </div>
            </div>
        `

        buyDivContainer.style.display = "grid"
        buyDivContainer.appendChild(buyDiv)

    }

}

/*
        <div class="buy-now-container" style="display: none;">
          <div class="buy-now-inner-container">

            <div id="buy-now-img-container">
              <img src="./img/ape.png" id="buy-now-img">
            </div>
            <div class="buy-name-price">
              <p>
                Product Name: Bored Ape
              </p>
              <span>
                Price: £<span class="buy-number-price" data-value="7.99">7.99</span>
              </span>
            </div>
          </div>
          </div>
*/


class Actions{
    constructor(){
        this.shoppingCartbtn = document.querySelectorAll(".put-in-cart-action span")
        this.shoppingShare = document.querySelectorAll(".share-action span")
        this.shoppingBuy = document.querySelectorAll(".buy-action span")
        this.shoppingButton = document.querySelector(".shopping")
    }

    addToShoppingCart(){
        console.log("hixxx")
        cart.addItemToCart();

    }
}



const cart = new ShoppingCart();
const actions = new Actions();


const shoppingCartbtn = document.querySelectorAll(".put-in-cart-action span")
const shoppingShare = document.querySelectorAll(".share-action span")
const shoppingBuy = document.querySelectorAll(".buy-action span")
const shoppingButton = document.querySelector(".shopping")
const bins = document.querySelectorAll(".bin")
const shareButton = document.querySelector(".share-Button");
const shareDialog = document.querySelector(".share-dialog");
const closeButton = document.querySelector(".close-button");




cart.setTotal();
divSelect();
divDelete();


cart.buyNow.addEventListener("click", ()=>{
    cart.buyNowDiv();
})



closeButton.addEventListener("click", ()=>{
    console.log("her")
    shareDialog.classList.remove("is-open")
})

for(const share of shoppingShare){
    share.addEventListener("click", ()=>{

        cart.shareNFT();
    })
    }


for(const cartbtn of shoppingCartbtn){ // adds item to cart. 
    cartbtn.addEventListener("click", (e)=>{
        cart.addItemToCart(e);
    })
}

function divSelect(){
for(const item of cart.itemQuantity) { //Changes the subTotal price, and the item price. 
    item.addEventListener("change", (e)=>{

        console.log(e.target);

        const target = e.target;

        if(target.matches("select")){
            cart.updateTotal(item.value, e);
        }else{
            console.log("it doesn't")
        }
})
}
}

function divDelete(){
for(const bin of cart.bin){

    bin.addEventListener("click", (e)=>{ // Remove an item when the bin icon is clicked 
        console.log("here")
        cart.removeItem(e); 
    }
)}
}

shoppingButton.addEventListener("click", ()=>{

    const shoppingContainer = document.querySelector(".shopping-container")
    const container = document.querySelector(".container")

    console.log(shoppingContainer.style.display)
    if(shoppingContainer.style.display == "none"){
        console.log("here")
        shoppingContainer.style.display = "grid";
        container.style.display = "none";
    }else{
        container.style.display = "grid";
        shoppingContainer.style.display = "none";
    }
})




// for(const buy of shoppingBuy){
//     buy.addEventListener("click", ()=>{
//         console.log("buy")
//     })
// }
// for(const share of shoppingShare){
//     share.addEventListener("click", ()=>{
//         console.log("share")
//     })
// }
