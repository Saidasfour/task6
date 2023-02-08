var allProducts=[];
class Product{
    constructor(id,name,price,quantity,imgURL,isSaled){
        this.id=id;
        this.name=name;
        this.price=price;
        this.quantity=quantity;
        this.imgURL=imgURL;
        this.isSaled=isSaled;
        allProducts.push({id:this.id,name:this.name,price:this.price,quantity:this.quantity,imgURL:this.imgURL,isSaled:this.isSaled})
    }

    getProduct(){
        var obj={
            id:this.id,
            name:this.name,
            price:this.price,
            quantity:this.quantity,
            imgURL:this.imgURL,
            isSaled:this.isSaled
        }
        return obj;
    }
}




class ShoppingCart{
    constructor(){
        this.items=[];
        this.totalCost=0;
        
    }

    addProduct(product){
        this.items.push(product);
    }
    deleteProduct(product){
        this.items=this.items.filter((item)=>item.name!=product.name);
    }
    deleteProductQuantity(product,qntity){
    this.items.map((item)=>{if(item.name==product.name){item.quantity=item.quantity-qntity}});
    }

    displayCard(){
        
    for(let i=0;i<this.items.length;i++){
     console.log(this.items[i]);
    }
    }

    getTotalCost(){
        var cost=0;
       for(let i=0;i<this.items.length;i++){
     
     cost+=this.items[i].price*this.items[i].quantity;
    } 
    this.totalCost=cost;
    console.log(this.totalCost);
    }

    applyDiscount(x){
   let discount=(x*this.totalCost)/100;
   this.totalCost=this.totalCost-discount;
   console.log(this.totalCost);
    }
}


var allUsers=[];
class User{
    constructor(){
        this.username;
        this.email;
        this.password
        this.shoppingCarts=[];
         
    }

    createNewAccount(username,email,password,shoppingCarts){
        this.username=username;
        this.email=email;
        this.password=password;
        this.shoppingCarts=shoppingCarts;
        allUsers.push({username:this.username,email:this.email,password:this.password,shoppingCarts:this.shoppingCarts})
        
        localStorage.setItem("users",JSON.stringify(allUsers));
       

    }


    loggingIn(){
        const username=prompt("Enter your username");
        const password=prompt("Enter your password");
        var valid;
        if(username==this.username&&password==this.password){
            valid=true;
        }else{
            valid=false;
        }

        if(valid==true){
            console.log("Logged in successfully")
        }else{
            console.log("invalid email or password")
        }

    }


    viewAccountDetails(){
        console.log("name: "+this.username+" email:"+this.email+" shopping Carts:"+JSON.stringify(this.shoppingCarts))
    }
}


class Admin extends User{
constructor(){
    super("username","email","password","shoppingCarts");
this.accessLevel;
}

showallProducts(){
    console.log(allProducts);
}

addNewProduct(id,name,price,quantity,imgURL,isSaled){
let newProduct={id,name,price,quantity,imgURL,isSaled};
allProducts.push(newProduct);
}

deleteProduct(name){
allProducts=allProducts.filter((product)=>product.name!=name);
}

editProduct(id,name,price,quantity,imgURL,isSaled){
allProducts.map((product)=>{if(product.id==id){product.name=name,product.price=price,product.quantity=quantity,product.imgURL=imgURL,product.isSaled=isSaled}});


}

viewAllUsers(){
    console.log(JSON.parse(localStorage.getItem('users')))
}

editingUsers(username,email){
    allUsers.map((user)=>{if(user.username==username){user.email=email}});
    localStorage.setItem("users",JSON.stringify(allUsers));
}
}

const p1=new Product(0,"nutella",22,2,"img","Yes");
const p2=new Product(1,"galaxy",18,2,"img","No");
const p3=new Product(2,"KitKat",10,2,"img","Yes");
const p4=new Product(3,"Albeni",32,2,"img","No");
const s=new ShoppingCart();
s.addProduct(p1);
s.addProduct(p2);
s.addProduct(p3);
s.addProduct(p4);
s.displayCard();
s.getTotalCost();
s.applyDiscount(10);
s.deleteProduct(p4);
s.getTotalCost();
s.applyDiscount(10);
s.deleteProductQuantity(p3,1);
s.deleteProductQuantity(p2,2);
s.displayCard();


//localStorage.setItem("users",JSON.stringify({username:"said",email:"saidasfour20@gmail.com",password:"said",shoppingCarts:[p1]}));

const u1=new User();
const u2=new User();
const u3=new User();
u1.createNewAccount("nour","nour@gmail.com","nour",[p2,p1]);
u2.createNewAccount("ahmad","ahmad@gmail.com","ahmad",p3);
u3.createNewAccount("wael","wael@gmail.com","wael",p3);
const users=JSON.parse(localStorage.getItem('users'));
//console.log(users);

//u1.loggingIn();
//u1.viewAccountDetails();
const admin=new Admin();
admin.addNewProduct(4,"jsdjd",11,3,"img","Yes");
admin.deleteProduct("galaxy");
admin.editProduct(0,"nuhshh",22,2,"img","Yes")
admin.showallProducts();
admin.editingUsers("wael","w@gmail.com","w",p3);
admin.viewAllUsers();
