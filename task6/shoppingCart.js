class ShoppingCart {
    constructor(items,totalCost) {
        this.items = items;
        this.totalCost = totalCost;

    }

    addProduct(product, name) {
        let z = allUsers;
        let all = z.map((user) => { if (user.username == name) { user.shoppingCarts.items.push(product) } user.shoppingCarts.totalCost = 0; user.shoppingCarts.items.map((item) => { user.shoppingCarts.totalCost += parseInt(item.price) }); return user; });
        //localStorage.setItem("users", JSON.stringify(all));
        allUsers = all;
    }
    deleteProduct(product) {
        this.items = this.items.filter((item) => item.name != product.name);

    }
    deleteProductByID(productid, username) {
       
        let z = allUsers;
        let all = z.map((user) => { if (user.username == username) { /*user.shoppingCarts.items = user.shoppingCarts.items.filter((item) => item.id != productid);*/ user.shoppingCarts.items.map((item)=>{if(item.id==productid&&item.quantity>1){item.quantity--;}else{user.shoppingCarts.items = user.shoppingCarts.items.filter((item) => item.id != productid);}}) } user.shoppingCarts.totalCost = 0; user.shoppingCarts.items.map((item) => { user.shoppingCarts.totalCost += item.price }); return user; });
        //localStorage.setItem("users", JSON.stringify(all));
        allUsers = all;
       
    }
    deleteProductQuantity(product, qntity) {
        let x = this.items;
        this.items = x.map((item) => { if (item.name == product.name) { item.quantity = item.quantity - qntity } return item; });//error occurs
    }

    displayCard() {
        let CardItems = [];
        for (let i = 0; i < this.items.length; i++) {
            CardItems.push(this.items[i]);
        }
        return CardItems;
    }

    getTotalCost() {
        var cost = 0;
        for (let i = 0; i < this.items.length; i++) {

            cost += this.items[i].price * this.items[i].quantity;
        }
        this.totalCost = cost;
        return this.totalCost;
    }

    applyDiscount(x) {
        let discount = (x * this.totalCost) / 100;
        this.totalCost = this.totalCost - discount;
        return this.totalCost;
    }
}
