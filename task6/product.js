
class Product{
    constructor(id,name,price,quantity,imgURL,isSaled){
        this.id=id;
        this.name=name;
        this.price=price;
        this.quantity=quantity;
        this.imgURL=imgURL;
        this.isSaled=isSaled;
        
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