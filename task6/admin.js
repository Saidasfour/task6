class Admin extends User {
    constructor(name, pass) {
        super("username", "email", "password", "shoppingCarts");
        this.name = name;
        this.pass = pass;
        this.accessLevel;
        //products=[];
        //users=[];
    }

    showallProducts() {
        return JSON.stringify(allProducts);
    }

    addNewProduct(id, name, price, quantity, imgURL, isSaled) {
        let newProduct = { id, name, price, quantity, imgURL, isSaled };
        if (allProducts != []) {
            allProducts.push({ id, name, price, quantity, imgURL, isSaled });
            //localStorage.setItem("products", JSON.stringify(z));
            //allProducts = z;
        } else {
            //let q = [newProduct];
            allProducts.push(newProduct);
            //allProducts = q;
        }

    }

    deleteProduct(id) {
        let z = allProducts;
        let all = z.filter((product) => product.id != id);
        //localStorage.setItem("products", JSON.stringify(all));
        allProducts = all;
    }

    editProduct(id, name, price, quantity, imgURL, isSaled) {
        let z = allProducts;
        z.map((product) => { if (product.id == id) { product.name = name, product.price = price, product.quantity = quantity, product.imgURL = imgURL, product.isSaled = isSaled } return product; });
        allProducts=z;

        //allProducts = z;


    }

    viewAllUsers() {
        return allUsers != null ? allUsers : "No users yet";
    }

    editingUsers(username, email) {
        allUsers.map((user) => { if (user.username == username) { user.email = email } });
        localStorage.setItem("users", JSON.stringify(allUsers));
    }

    discount(disc) {
        let z = allUsers;
        if (z != null) {
            z.map((user) => { let w = user.shoppingCarts.totalCost * disc / 100; user.shoppingCarts.totalCost = user.shoppingCarts.totalCost - w; });
            localStorage.setItem("users", JSON.stringify(z));
        }

    }
}