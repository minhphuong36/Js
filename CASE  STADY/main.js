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
// var product1 = new Product("Điện thoại Iphone XS max 64GB","./img/iphone-xs-max.jpg","10.000.000","14.000.000");
// var product2 = new Product("Điện thoại Iphone 11 pro max 64GB","./img/iphone11pro.jpg","12.000.000","15.000.000");
// var product3 = new Product("Điện thoại Iphone 12 pro max 64GB","./img/iphone12pro.png","14.000.000","16.000.000");
// var product4 = new Product("Điện thoại Iphone 13 pro max 64GB","./img/13pro.jpeg","20.000.000","22.000.000");
// var product5 = new Product("Điện thoại Iphone 14 pro max 64GB","./img/iPhone14pro.jpg","37.000.000","40.000.000");
// var product6 = new Product("Apple Watch series 3","./img/appleseries3.jpg","3000.000","3500.000");
// var product7 = new Product("Apple Watch series 4","./img/watchseries4.jpg","3700.000","3900.000");
// var product8 = new Product("Apple Watch series 5","./img/watchseri5.jpg","4000.000","4200.000");
// var product9 = new Product("Apple Watch series 6","./img/Series6.jpg","4300.000","5000.000");
// var product10 = new Product("Apple Watch series 7","./img/Seri7.jpg","8000.000","9500.000");
//
//
//
// arrProductAll = [product1,product2,product3,product4,product5,product6,product7,product8,product9,product10];
// display(arrProductAll);

// localStorage.setItem('product',JSON.stringify(arrProductAll));
let product = JSON.parse(localStorage.getItem('product'));
display(product);


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
                           <button type="submit" id="btn-edit" class="edit" onclick="editProduct(${i})">Sửa</button>
                            <button type="submit" id="btn-delete" class="delete" onclick="delProduct(${i})">Xóa</button>
                         </div>
                 </a>
             </div>`
     }
    document.getElementById("displayElement").innerHTML = data;
     localStorage.setItem('product',JSON.stringify(product));
}


function editProduct(index) {
    // let nameEdit = prompt("Nhập tên mới")
    // let priceCurrentEdit = +prompt("Nhập giá mới")
    // let priceOldEdit = +prompt("Nhập giá cũ")
    // let imgEdit = prompt("Nhập hình ảnh mới")
    addProductDisplay();
    let productEdit = product[index];
    document.getElementById("input-name").value = productEdit.name;
    document.getElementById("input-img").value = productEdit.img;
    document.getElementById("input-priceCurrent").value = productEdit.priceCurrent;
    document.getElementById("input-priceOld").value = productEdit.priceOld;
    document.getElementById("index").value = index;




    // if (nameEdit == "" || priceCurrentEdit == ""|| priceOldEdit == "" || imgEdit == "" ) {
    //     alert("Không được để trống thông tin ")
    // } else if (isNaN(priceCurrentEdit) || isNaN(priceOldEdit)) {
    //     alert("Giá sản phẩm phải là số")
    // } else {

        // arrProductAll[index].name = nameEdit
        // arrProductAll[index].priceCurrent = priceCurrentEdit
        // arrProductAll[index].priceOld = priceOldEdit
        // arrProductAll[index].img = imgEdit

        // product[index].name = nameEdit
        // product[index].priceCurrent = priceCurrentEdit
        // product[index].priceOld = priceOldEdit
        // product[index].img = imgEdit


        // display(product)
        // localStorage.setItem('product',JSON.stringify(product));
    // }
}

function delProduct(index) {
    if (confirm("Do you want to delete product")) {
        // arrProductAll.splice(index, 1);
        // display(arrProductAll)

        product.splice(index, 1);
        display(product)
        localStorage.setItem('product',JSON.stringify(product));
    }
}


function addProductDisplay() {
    let dataAdd = ""
    dataAdd += `
            <div class="input-add" >
                    <input type="hidden" id="index" ><br>
                    <input type="text" placeholder="Tên sản phẩm" id="input-name" ><br>
                    <input type="text" placeholder="Giá" id="input-priceCurrent" ><br>
                    <input type="text" placeholder="Giá cũ" id="input-priceOld" ><br>
                    <input type="text" placeholder="Link-Img" id="input-img" ><br>
                    <p id="check" style="color: red; padding: 15px 0px 0px 25px"></p>
                    <input type="submit" value="Lưu" onclick="addProduct()" id="btn-addProduct">
                     <input type="submit" value="Hủy" onclick="cancelAdd()" id="btn-cancel">
                </div>    
    `
    document.getElementById("add-product").innerHTML = dataAdd;
    localStorage.setItem('product',JSON.stringify(product));
}

function addProduct() {
    let index = document.getElementById("index").value;
    let nameProduct = document.getElementById("input-name").value;
    let imgProduct = document.getElementById("input-img").value;
    let priceCurrentProduct = document.getElementById("input-priceCurrent").value;
    let priceOldProduct = document.getElementById("input-priceOld").value;
    let check = document.getElementById("check");
    let priceCurrentProductCheck = priceCurrentProduct.replaceAll(".","");
    let priceOldProductCheck = priceOldProduct.replaceAll(".","");

    if (nameProduct == "" || imgProduct == "" || priceCurrentProduct == "" || priceOldProduct == "") {
        check.innerHTML = "* Không được để trống thông tin"
    } else if (isNaN(priceCurrentProductCheck) || isNaN(priceOldProductCheck)) {
        check.innerHTML = "* Giá sản phẩm phải là số"
    } else {
        // var product = new Product(nameProduct, imgProduct, priceCurrentProduct, priceOldProduct );
        var products = new Product(nameProduct, imgProduct, priceCurrentProduct, priceOldProduct );

        // arrProductAll.push(product);
        // display(arrProductAll);
        if(index != ""){
            product.splice(index,1,products);
        }else{
            product.push(products);
        }
        clear();
        display(product);
        localStorage.setItem('product',JSON.stringify(product));
        document.getElementById("add-product").innerHTML = ""
    }
}
function clear(){
    document.getElementById("input-name").value = "";
    document.getElementById("input-img").value = "";
    document.getElementById("input-priceCurrent").value = "";
    document.getElementById("input-priceOld").value = "";
    document.getElementById("index").value = "";
}


function cancelAdd() {
    document.getElementById("add-product").innerHTML = "";
    // localStorage.setItem('product',JSON.stringify(product));
}


function register() {
    let dataRegister = ""
    dataRegister += `
             <div class="modal">
    <div class="modal__overlay"></div>
    <div class="modal__body">
            <div class="auth-form">
                <div class="auth-form__container">
                    <div class="auth-form__header" >
                        <h3 class="auth-form__heading" >Đăng ký</h3>
                       
                    </div>
                    <div class="auth-form__form">
                        <div class="auth-form__group">
                            <input type="text" class="auth-form__input" id="email" placeholder="Nhập email của bạn">
                        </div>
                        <div class="auth-form__group">
                            <input type="password" class="auth-form__input" id="password1" placeholder="Nhập password của bạn">
                        </div>
                        <div class="auth-form__group">
                            <input type="password" class="auth-form__input" id="password2" placeholder="Nhập lại password của bạn">
                        </div>
                    </div>
                    <div class="auth-form__aside">
                        <p class="auth-form__policy-text">
                  
                            <a href="" class="auth-form__text-link">Điều khoản dịch vụ</a>&
                            <a href="" class="auth-form__text-link">Chính sách bảo mật</a>
                        </p>
                    </div>
                    <div class="auth-form__controls">
                        <button class="btn auth-form__controls-back">TRỞ LẠI</button>
                        <button class="btn btn--primary" onclick="registerAccount()">ĐĂNG KÝ</button>
                    </div>
                </div>

                <div class="auth-form__socials">
                    <a href="" class="auth-form__socials--facebook btn btn--size-s btn--with-icon">
                        <i class="auth-form__socials-icon fa-brands fa-square-facebook"></i>
                       <span class="auth-form__socials-title">
                           Kết nối với Facebook
                       </span>
                    </a>
                    <a href="" class="auth-form__socials--google btn btn--size-s btn--with-icon">
                        <i class="auth-form__socials-icon  fa-brands fa-google-plus"></i>
                        <span class="auth-form__socials-title">
                           Kết nối với Google
                       </span>

                    </a>
                </div>

            </div>


    `
    document.getElementById("register-add").innerHTML = dataRegister;
}

class Account {
    email;
    password;

    get email() {
        return this.email;
    }

    set email(value) {
        this.email = value;
    }

    get password() {
        return this.password;
    }

    set password(value) {
        this.password = value;
    }

    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}
let accounts = [];
   accounts = JSON.parse(localStorage.getItem("accounts")) ;

function registerAccount(){
    let email = document.getElementById("email").value;
    let pass1 = document.getElementById("password1").value;
    let pass2 = document.getElementById("password2").value;
    let check = false;
    if(email != "" && pass1 != "" && pass2 != ""){
        if(pass1 === pass2){
            check = true;
        }else{
            alert("password không giống nhau");
            check = false;
        }
    }
    if(check){
        let account = new Account(email, pass1);

        accounts.push(account);
        localStorage.setItem("accounts", JSON.stringify(accounts));
    }
}


function longin() {
    let dataLongin = "";
    dataLongin += `
             <div class="modal">
    <div class="modal__overlay"></div>
    <div class="modal__body">
                    <div class="auth-form">
            <div class="auth-form__container">
                <div class="auth-form__header">
                    <h3 class="auth-form__heading" >Đăng nhập</h3>
                    <h3 id="username" ></h3>
                </div>
                <div class="auth-form__form">
                    <div class="auth-form__group">
                        <input type="text" class="auth-form__input" id="login_name" placeholder="Nhập email của bạn">
                    </div>
                    <div class="auth-form__group">
                        <input type="password" class="auth-form__input" id="login_pass" placeholder="Nhập password của bạn">
                    </div>
                </div>
                <div class="auth-form__aside">
                   <div class="auth-form__help">
                       <a href="" class="auth-form__help-link auth-form__help-forgot">Quên mật khẩu</a>
                       <span class="auth-form__help-separate"></span>
                       <a href="" class="auth-form__help-link">Cần trợ giúp?</a>
                   </div>
                </div>
                <div class="auth-form__controls">
                    <button class="btn auth-form__controls-back">TRỞ LẠI</button>
                    <button class="btn btn--primary" onclick="login()">ĐĂNG NHẬP</button>
                </div>
            </div>

            <div class="auth-form__socials">
                <a href="" class="auth-form__socials--facebook btn btn--size-s btn--with-icon">
                    <i class="auth-form__socials-icon fa-brands fa-square-facebook"></i>
                    <span class="auth-form__socials-title">
                           Đăng nhâp với Facebook
                       </span>
                </a>
                <a href="" class="auth-form__socials--google btn btn--size-s btn--with-icon">
                    <i class="auth-form__socials-icon  fa-brands fa-google-plus"></i>
                    <span class="auth-form__socials-title">
                           Đăng nhâp với Google
                       </span>

                </a>
            </div>


            </div>
   </div>
            
    `
    document.getElementById("longin-add").innerHTML = dataLongin;
}

function login(){
    let email = document.getElementById("login_name").value;
    let pass1 = document.getElementById("login_pass").value;
    let check = false;
    let account = JSON.parse(localStorage.getItem("accounts"));
    for(let i=0; i < account.length;i++){
        let acc = accounts[i];
        if(acc.email === email && acc.password === pass1){
            check = true;
            break;
        }
    }
    if(check){
        document.getElementById("register-main").style.display = "none";
        document.getElementById("longin-main").style.display = "none";
        document.getElementById("longin-add").innerHTML = email;
    }else{
        alert("email hoặc mật khẩu sai");
    }

}
