
class User {
    constructor() {
        this.username;
        this.email;
        this.password
        this.shoppingCarts;

    }

    createNewAccount(username, email, password, shoppingCarts) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.shoppingCarts = shoppingCarts;
        if (allUsers != []) {
            const old = allUsers;
            old.push({ username: this.username, email: this.email, password: this.password, shoppingCarts: this.shoppingCarts });
            //localStorage.setItem("users", JSON.stringify(old));
            allUsers = old;
        } else {
            //allUsers = [];
            allUsers.push({ username: this.username, email: this.email, password: this.password, shoppingCarts: this.shoppingCarts })
            //localStorage.setItem("users", JSON.stringify(allUsers));
        }



    }


    loggingIn() {
        const username = prompt("Enter your username");
        const password = prompt("Enter your password");
        let msg="";
        var valid;
        if (username == this.username && password == this.password) {
            valid = true;
        } else {
            valid = false;
        }

        if (valid == true) {
            msg="Logged in successfully";
            return msg;
        } else {
            msg="invalid email or password";
            return msg
        }

    }


    viewAccountDetails() {
        return ("name: " + this.username + " email:" + this.email + " shopping Carts:" + JSON.stringify(this.shoppingCarts))
    }
}