// const p1=new Product(0,"nutella",22,1,"img","Yes");
//  const p2=new Product(1,"galaxy",18,1,"img","No");
//  const p3=new Product(2,"KitKat",10,1,"img","Yes");
//  const p4=new Product(3,"Albeni",32,1,"img","No");


var allProducts=JSON.parse(localStorage.getItem('products'))? JSON.parse(localStorage.getItem('products')) : [];
var allUsers = JSON.parse(localStorage.getItem('users'))? JSON.parse(localStorage.getItem('users')) : [];


function refresh(){
    JSON.parse(localStorage.getItem('products'));
    JSON.parse(localStorage.getItem('users'));
}

function save(){
    
    localStorage.setItem("products", JSON.stringify(allProducts));
    localStorage.setItem("users", JSON.stringify(allUsers));
}

refresh();

const auth = prompt("1-LOGIN \n2-SIGNUP");

if (auth == 1) {


    const loginName = prompt("Enter Your Name");
    const loginPass = prompt("Enter Your Password");
    if (loginName == "admin") {

        let adminName = "admin";
        let adminPass = "admin";
        const admin = new Admin(adminName, adminPass);

        if (adminName == loginName && adminPass == loginPass) {
            loop = false;
            while (loop == false) {
                const adminchoices = prompt("What do you want:\n1-Show All Products\n2-Add Product \n3-Delete Product\n4-Edit Product\n5-Display All Users\n6-Apply Discount");
                if (adminchoices == 1) {
                    alert(admin.showallProducts());
                } else if (adminchoices == 2) {
                    const pid = prompt("Enter ID of product");
                    const pname = prompt("Enter Name of Product");
                    const pprice = prompt("Enter Price of Product");
                    const pquantity = prompt("Enter Quantity of Product");

                    admin.addNewProduct(pid, pname, pprice, pquantity, "pimgUrl", "pisSaled");
                } else if (adminchoices == 3) {
                    const prodDel = prompt("Enter Product ID");
                    admin.deleteProduct(prodDel);
                } else if (adminchoices == 4) {
                    const ppid = prompt("Enter ID of product you want to edit");
                    const ppname = prompt("Enter Name of Product");
                    const pprice = prompt("Enter Price of Product");
                    const ppquantity = prompt("Enter Quantity of Product");

                    admin.editProduct(ppid, ppname, pprice, ppquantity, "pimgUrl", "pisSaled");
                } else if (adminchoices == 5) {

                    alert(JSON.stringify(admin.viewAllUsers()));
                } else if (adminchoices == 6) {

                    const discount = prompt("Disctount Number:");
                    admin.discount(discount);

                } else if (adminchoices == null) {
                    loop = true;
                }
            }
        } else {
            alert("Invalid Email or password");
        }
        //end admin section
    } else {
        const s = new ShoppingCart([],0); //creating first shopping Card
        const users = allUsers;
        if (users != null) {
            users.map((user) => {
                if (user.username == loginName && user.password == loginPass) {
                    alert("LOGIN SUCCESSFULL, Welcome " + loginName);
                    var stop = false;
                    while (stop == false) {
                        const choices = prompt("What do you want:\n1-Show All Products\n2-Add Product to Card \n3-Delete Product from Card \n4-View Account Details");
                        if (choices == 2) {
                            const prodName = prompt("Enter Product Name");
                            if (allProducts.find(obj => obj.name == prodName)) {
                                allProducts.map((prod) => {
                                    if (prod.name == prodName) {
                                        s.addProduct(prod, user.username);



                                    }
                                })


                            } else {
                                alert("Product dont exist");
                            }
                        } else if (choices == 1) {
                            alert("Products:\n" + JSON.stringify(allProducts));
                        } else if (choices == 3) {
                            const prodtoDel = prompt("Enter Product ID");
                            s.deleteProductByID(prodtoDel, user.username);
                        } else if (choices == 4) {
                            //alert("Account details:\n"+u1.viewAccountDetails());
                            alert(JSON.stringify("name " + user.username + " email:" + user.email + " shopping Cart:" + (JSON.stringify(user.shoppingCarts)) + " total Cost:" + user.shoppingCarts.totalCost));
                        } else if (choices == null) {
                            stop = true;
                        }
                    }
                }
                else { alert("INVALID EMAIL OR PASSWORD") }
            })
        } else {
            alert("Invalid username or password")
        }
    }

} else if (auth == 2) {
    const u = new User();
    const uName = prompt("Enter Username");
    const uEmail = prompt("Enter Email");
    const uPass = prompt("Enter Password");

    const s2 = new ShoppingCart([],0);

    u.createNewAccount(uName, uEmail, uPass, s2);

    alert("SIGNED UP SUCCESSFULLY, Welcome " + uName);
    var stop = false;
    while (stop == false) {
        const choices = prompt("What do you want:\n1-Show All Products\n2-Add Product to Card \n3-Delete Product from Card \n4-View Account Details");
        if (choices == 2) {
            const prodName = prompt("Enter Product Name");
            if (allProducts.find(obj => obj.name == prodName)) {
                allProducts.map((prod) => {
                    if (prod.name == prodName) {
                        s2.addProduct(prod, uName);

                    }
                })


            } else {
                alert("Product dont exist");
            }
        } else if (choices == 1) {
            alert("Products:\n" + JSON.stringify(allProducts));
        } else if (choices == 3) {
            const prodtoDel = prompt("Enter Product ID");
            s2.deleteProductByID(prodtoDel, uName);
        } else if (choices == 4) {
            //alert("Account details:\n"+u1.viewAccountDetails());
            alert(u.viewAccountDetails())
        } else if (choices == null) {
            stop = true;
        }
    }

}




save();