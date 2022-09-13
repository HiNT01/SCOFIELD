const products = [
    {
        productId : 1,
        productName : "Giày Nike Jordan 1 Retro High OG SP 'Utility Stash' DN4336-001 ",
        productCost : 8900000 ,
        productSale : 7929900,
        productImg :'./assets/img/product/shoes/sh1.png',
        productImgHover :'./assets/img/product/shoes/sh1-h.png',
    },
    {
        productId : 2,
        productName : " Giày Nike Air Jordan 1 Mid GS 'White Shadow' 554725-073 ",
        productCost : 8500000 ,
        productSale : 7573500,
        productImg :'./assets/img/product/shoes/sh2.png',
        productImgHover :'./assets/img/product/shoes/sh2-h.png',
    },
    {
        productId : 3,
        productName : " Giày Nike Jordan 1 Retro Golf 'Starfish' DD9315-800 ",
        productCost : 6900000 ,
        productSale : 6147900,
        productImg :'./assets/img/product/shoes/sh3.png',
        productImgHover :'./assets/img/product/shoes/sh3-h.png',
    },
    {
        productId : 4,
        productName : " Giày Nike Jordan 1 High OG 'Denim' DM9036-104 ",
        productCost : 6900000 ,
        productSale : 6147900,
        productImg :'./assets/img/product/shoes/sh4.png',
        productImgHover :'./assets/img/product/shoes/sh4-h.png',
    },
    {
        productId : 5,
        productName : " Giày Nike Air Jordan 1 Retro High OG 'Volt' 555088-702 ",
        productCost : 6900000 ,
        productSale : 6147900,
        productImg :'./assets/img/product/shoes/sh5.png',
        productImgHover :'./assets/img/product/shoes/sh5-h.png',
    }
]
const evaluates = [
    {   
        evaluateId:1,
        userId : 1,
        productId :1 ,
        point : 4,
    },
    {
        evaluateId:2,
        userId : 1,
        productId :2 ,
        point : 2,
    },
    {
        evaluateId:3,
        userId : 1,
        productId :3 ,
        point : 3,
    },
    {
        evaluateId:4,
        userId : 1,
        productId :4 ,
        point : 4,
    },
    {
        evaluateId:5,
        userId : 1,
        productId :5 ,
        point : 5,
    }
    ,{
        evaluateId:6,
        userId : 1,
        productId :1 ,
        point : 5,
    }
]
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const imgProduct = $('#img-visi')
const imgProductHidden = $('#img-hidden')
const btnSearch = $('#btn-search-hidden')
const listItem = $('.product__items')
const sliderProduct = {
    products : products,
    currentStart : 0,
    limit :5, 
    render : function () {
        let i = this.currentStart
        let max = this.limit
        let htmls = '';
        for(i;i<max;i++) {
            htmls += `<div href="#" class="product__item">
            <div class="product__itemImg">
                <img src="${this.products[i].productImg}" alt="" id="img-visi">
                <img src="${this.products[i].productImgHover}" alt="" class="hidden" id="img-hidden">
                <span class="product__sale">
                    -11%
                </span>
                <button class="hidden" id="btn-search-hidden">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>

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
                    ${this.products[i].productName}
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
                    ${this.products[i].productSale}
                    </div>
                    <div class="product__price product__price--cost">
                    ${this.products[i].productCost}
                    </div>
                </div>
            </div>
        </div>`
        }
        listItem.innerHTML = htmls
    },
    handleProduct : function () {
        //hover img product
        imgProduct.onmouseover = function () {
            imgProductHidden.classList.remove('hidden')
            imgProduct.classList.add('hidden')
            btnSearch.classList.remove('hidden')
        }
        imgProductHidden.onmouseout = function () {
            imgProductHidden.classList.add('hidden')
            imgProduct.classList.remove('hidden')
            btnSearch.classList.add('hidden')
        }
    },
    start : function ()  {
        // render list product
        this.render()
        // lang ngh va xu ly su kien
        this.handleProduct()

    }
}
sliderProduct.start()
