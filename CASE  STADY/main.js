class Product{
    name;
    img;
    priceCurrent;
    priceOld;


    constructor(name, img, priceCurrent, priceOld) {
        this.name = name;
        this.img = img;
        this.priceCurrent = priceCurrent;
        this.priceOld = priceOld;
    }
    getName(){
        return this.name;
    }
    setName(value){
        this.name = value;
    }
    getImg(){
        return this.img;
    }
    setImg(value){
        this.img = value;
    }
    getPriceCurrent(){
        return this.priceCurrent;
    }
    setPriceCurrent(value){
        this.priceCurrent = value;
    }
    getPriceOld(){
        return this.priceOld;
    }
    setPriceOld(value){
        this.priceOld = value;
    }
}
var product1 = new Product("Điện thoại Iphone XS max 64GB","./img/iphone-xs-max.jpg","10.000.000","14.000.000");
var product2 = new Product("Điện thoại Iphone 11 pro max 64GB","./img/iphone11pro.jpg","12.000.000","15.000.000");
var product3 = new Product("Điện thoại Iphone 12 pro max 64GB","./img/iphone12pro.png","16.000.000","14.000.000");
var product4 = new Product("Điện thoại Iphone 13 pro max 64GB","./img/13pro.jpeg","20.000.000","22.000.000");
var product5 = new Product("Điện thoại Iphone 14 pro max 64GB","./img/iPhone14pro.jpg","37.000.000","40.000.000");


arrProductAll = [product1,product2,product3,product4,product5];
display(arrProductAll);
function display(arrProduct){
     let data = "";
     for(let i = 0; i < arrProduct.length;i++){
         data +=`
             <div class="grid__column-2-4">
                 <a class="home-product-item" href="#">
                    <div class="home-product-item__img" style="background-image: url(${arrProduct[i].img})"></div>
                     <h4 class="home-product-item_name">${arrProduct[i].name}</h4>
                     <div class="home-product-item_price">
                         <span class="home-product-item_price-old">${arrProduct[i].priceOld} đ</span>
                         <span class="home-product-item_price-current">${arrProduct[i].priceCurrent} đ</span>
                     </div>
                     <div id="btn-product">
                           <button type="submit" id="btn-edit" onclick="editProduct(${i})">Sửa</button>
                            <button type="submit" id="btn-delete" onclick="delProduct(${i})">Xóa</button>
                         </div>
                 </a>
             </div>`
     }
    document.getElementById("displayElement").innerHTML = data;
}


function editProduct(index) {
    let nameEdit = prompt("Nhập tên mới")
    let priceEdit = +prompt("Nhập giá mới")
    let priceOldEdit = +prompt("Nhập giá cũ")
    let imageEdit = prompt("Nhập hình ảnh mới")


    if (nameEdit == "" || priceEdit == ""|| priceOldEdit == "" || imageEdit == "" ) {
        alert("Không được để trống thông tin ")
    } else if (isNaN(priceEdit) || isNaN(priceOldEdit)) {
        alert("Giá sản phẩm phải là số")
    } else {

        arrProductAll[index].name = nameEdit
        arrProductAll[index].priceCurrent = priceEdit
        arrProductAll[index].priceOld = priceOldEdit
        arrProductAll[index].img = imageEdit

        display(arrProductAll)
    }
}

function delProduct(index) {
    if (confirm("Do you want to delete product")) {
        arrProductAll.splice(index, 1);
        display(arrProductAll)
    }
}


function addProductDisplay() {
    let dataAdd = ""
    dataAdd += `
            <div class="input-add" >
                    <input type="text" placeholder="Tên sản phẩm" id="input-name" ><br>
                    <input type="text" placeholder="Giá" id="input-priceCurrent" ><br>
                    <input type="text" placeholder="Giá cũ" id="input-priceOld" ><br>
                    <input type="text" placeholder="Img" id="input-img" ><br>
                    <p id="check" style="color: red; padding: 15px 0px 0px 25px"></p>
                    <input type="submit" value="Thêm" onclick="addProduct()" id="btn-addProduct">
                     <input type="submit" value="Hủy" onclick="cancelAdd()" id="btn-cancel">
                  
                </div>    
    `
    document.getElementById("add-product").innerHTML = dataAdd;
}

function addProduct() {
    let nameProduct = document.getElementById("input-name").value;
    let imgProduct = document.getElementById("input-img").value;
    let priceCurrentProduct = +document.getElementById("input-priceCurrent").value;
    let priceOldProduct = +document.getElementById("input-priceOld").value;
    let check = document.getElementById("check");

    if (nameProduct == "" || imgProduct == "" || priceCurrentProduct == "" || priceOldProduct == "") {
        check.innerHTML = "* Không được để trống thông tin"
    } else if (isNaN(priceCurrentProduct) || isNaN(priceOldProduct)) {
        check.innerHTML = "* Giá sản phẩm phải là số"
    } else {
        var product = new Product(nameProduct, imgProduct, priceOldProduct, priceCurrentProduct );

        arrProductAll.push(product);
        display(arrProductAll);
        document.getElementById("add-product").innerHTML = ""
    }


}

function cancelAdd() {
    document.getElementById("add-product").innerHTML = "";
}
