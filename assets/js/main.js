const productApi = 'http://localhost:3000/product';
const evaluatesApi = 'http://localhost:3000/evaluates';
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
// const btnSearchProduct = $('#btn-search-hidden')
const listProductSale = $('.product__items')
const app = {
    
    currentId : 0,
    getApi : function (api,callback) {
        fetch(api)
        .then(function (response) {
            return response.json();
        })
        .then(callback)
    },
    renderProduct : function (data) {
        let arrProducts = data
        return arrProducts
    },
    sliderProductSale : function (data) {
        
        let arrProducts = data
        let arrProductSale = arrProducts.filter(element => {
            return element.productType === 1
        })
        // chua fix this
        app.loadProductSale(arrProductSale)
     },
     loadProductSale : function (productSales) {
        let i =  this.currentId
        let limit = 5
        let max = i + limit
        let htmls = ''
        for(i;i<max;i++) {
         let productItem = productSales[i] 
         htmls += ` <div href="#" class="product__item" data-product = ${productItem.productId} >
         <div class="product__itemImg">
             <span class="product__sale">
             11%
             </span>
             <button id="btn-search-hidden">
                 <i class="fa-solid fa-magnifying-glass"></i>
             </button>
             <img src=${productItem.productImg} alt="" id="img-visible">
            <img src=${productItem.productImgHover} alt=""  id="img-hidden">
             <button class="product__btnAdds">
                <span class="product__btnAdd">
                 <i class="fa-sharp fa-solid fa-cart-plus"></i>
                </span>
                 <span class="product__btnAddText">thêm vào giỏ</span>
             </button>
         </div>
         <div class="product__detail">
             <!-- name -->
             <h3 class="product__name">
             ${productItem.productName}
             </h3>
             <!-- star -->
             <ul class="product__evaluates">
                 <li class="product__evaluate">
                     <i class="fa-solid fa-star"></i>
                 </li>
                 <li class="product__evaluate">
                     <i class="fa-solid fa-star"></i>
                 </li>
                 <li class="product__evaluate">
                     <i class="fa-solid fa-star"></i>
                 </li>
                 <li class="product__evaluate">
                     <i class="fa-solid fa-star"></i>
                 </li>
                 <li class="product__evaluate">
                     <i class="fa-solid fa-star"></i>
                 </li>
                 <li class="product__evaluate">(0)</li>
             </ul>
             <!-- price -->
             <div class="product__prices">
                 <div class="product__price product__price--sale">
                 ${productItem.productSale} đ
                 </div>
                 <div class="product__price product__price--cost">
                 ${productItem.productCost} đ
                 </div>
             </div>
         </div>
     </div>`
        }
        listProductSale.innerHTML = htmls
     },
    handleEvents : function () {
        const nextProductSale = $('#btn__productNext--hover')
        const prevProductSale = $('#btn__productPrev--hover')
    //  next product sale
    nextProductSale.onclick = function () {
        _this = this
        
        _this.currentId = 5 
        _this.getApi(productApi,_this.sliderProductSale)
        console.log(_this.currentId)
    }
    // prev product sale
    },
 
    start : function () {
    // render slider product sale
    this.getApi(productApi,this.sliderProductSale)
    // lang nghe va xu ly event
    this.handleEvents()  
    }
}

app.start()
// CRUD
//  api ------- 
// 1. san pham - id,name,cost,sale,type,so_luong,urlimg1,urlimg2,nsx
// 2. danh gia - id , user_Id , product_id, point 
// 3. banner : id , url
// 4. user - id,fristName , Last name , username, password
// 5 .don hang - id , user_id,product_id,so_luong , don gia , tong tien,size

// cac viec can lam :
// san pham---------
// 1.getApi product, get api danh gia
// 2.render mang product gom san pham va danh gia - read
// 3.loc cac san phan sale => render list sale    
// 4.xu su kien khi click btn sale               - update


// 5.render ra toan bo san pham
// 6.xem option them san pham
// 7. con so luong thi moi add vo gio - create
// 8. tang giam so luong mua          - update
// 9. xoa san pham                     - delete



//banner-------
// 1.get api 
// 2.render ra banner
// 3.xu ly cac su kien banner

// -------- QC khi lan dau vao trang web
// ---------- thong bao don hang









