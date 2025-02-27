let products = [{
    id: 1,
    name:'Camera',
    image:'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    price:'21500',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia repellendus est neque nemo dolore laboriosam? Architecto tenetur itaque molestiae officia assumenda unde voluptatibus velit quibusdam delectus explicabo nam nulla deleniti quidem iure blanditiis, dolores culpa debitis amet obcaecati totam impedit tempore. Atque, iure quidem accusantium eos id quasi eum iste!'
},
{
    id: 2,
    name:'Shoe',
    image:'https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80',
    price:'3500',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia repellendus est neque nemo dolore laboriosam? Architecto tenetur itaque molestiae officia assumenda unde voluptatibus velit quibusdam delectus explicabo nam nulla deleniti quidem iure blanditiis, dolores culpa debitis amet obcaecati totam impedit tempore. Atque, iure quidem accusantium eos id quasi eum iste!'

},
{   
    id: 3,
    name:'Soap',
    image:'https://images.unsplash.com/photo-1618840152526-92682643af2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
    price:'250',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia repellendus est neque nemo dolore laboriosam? Architecto tenetur itaque molestiae officia assumenda unde voluptatibus velit quibusdam delectus explicabo nam nulla deleniti quidem iure blanditiis, dolores culpa debitis amet obcaecati totam impedit tempore. Atque, iure quidem accusantium eos id quasi eum iste!'

}];

// let prod = document.getElementById('product-con');



    // fetch('https://fakestoreapi.com/products')
    //         .then(res=>res.json())
    //         .then(prd=>(
        
    //      prd.forEach((products, i) => {
                            
    //                         prod.innerHTML += `
                            
    //                             <div class="product">
                        
    //                                     <div class="product-img">
    //                                         <img src = '${prd[i].image}'/>
    //                                     </div>
                        
    //                                     <div class="product-name">
    //                                         <p> ${prd[i].title} </p>
    //                                     </div>
                        
    //                                     <div class="product-info">
                        
    //                                             <p>ราคา : </p>
                                        
    //                                         <div class="product-price">
                                            
    //                                             <p> ${numberWithCommas(prd[i].price)} </p>
                        
    //                                         </div> 
                        
    //                                     </div>
                                
    //                                 <div class="product-btn">
    //                                     <div class="btn">
    //                                         <p id = "btn-atc" class ="btn-atc" onclick = "AtcFunc(${i})"> Add To Cart </p>
    //                                     </div>
    //                                     <div class="btn">
    //                                         <p class ="btn-buy"> Buy </p>
    //                                     </div>
    //                                 </div>
                        
    //                             </div>    
    //                             `  

    //          }


    //  )));

let Cart = document.getElementById('cart');
let Hcart = document.querySelector('.cart-item-con');
let Numpcart = document.querySelector('.number-product');




// function HSCart


function HScart(){

    if(Hcart.style.display == "none"){
    
        Hcart.style.display = "flex";
    }
    
    else{
        Hcart.style.display = "none";
        
    }


}

// end-function HSCart



    // product-page
    
    let prod = document.getElementById('product-con');

    for(let i=0; i < products.length; i++){

        prod.innerHTML += `
        
            <div class="product">
    
                    <div class="product-img">
                        <img src = ${products[i].image}/>
                    </div>
    
                    <div class="product-name">
                        <p> ${products[i].name} </p>
                    </div>

                    <div class="product-desc">
                    <p>${products[i].name} : ${products[i].desc} </p> 
                    </div>
    
                    <div class="product-sell">
    
                            <p>ราคา : </p>
                    
                        <div class="product-price">
                        
                            <p> ${numberWithCommas(products[i].price)} </p>
    
                        </div> 
    
                    </div>
            
                <div class="product-btn">
                    <div class="btn">
                        <p id = "btn-atc" class ="btn-atc" onclick = "AtcFunc(${i})"> Add To Cart </p>
                    </div>
                    
                </div>
    
            </div>    
            `  
        }

    // end-product-page
        
        
    let AtcBtn = document.getElementById('btn-atc');
    var cartp = [];
    var productIndex = 0; 

    
    function AtcFunc(index) { 

        productIndex = index;
        var pass = true;
            if(pass){
                
                
                var obj = {
                    index: productIndex,
                    id: products[productIndex].id,
                    name: products[productIndex].name,
                    img: products[productIndex].image,
                    price: products[productIndex].price,
                    count: 1
                
                }

                
        
            }
        
        cartp.push(obj);
        console.log(index);

            $("#img-c").attr('src', products[index].img),
            $("#name-c").text(products[index].name),
            $("#price-c").text(products[index].price);
    
                    if(cartp.length > 0){
    
                            var html = '';
                            for(i=0; i<cartp.length; i++){
                                
                                html += `
    
                                    <div class="cart-item-l">
                                    <img id = "img-c"class="img-product-cart" src= ${cartp[i].img}/>
                                    <div id = "des-c" class="cart-item-des">
                                    <p id="name-c"> ${cartp[i].name} </p>
                                    <p id="price-c"> ${numberWithCommas(cartp[i].price)}</p>
                                    <p id = "thb-c"> THB </p>
                                    </div>
                                                                        
                                    </div>
                                                                
                                    <div class="cart-item-r">
                                    <div class="quantity">
                                    <p class="del"> - </p>
                                    <p class="num"> 1 </p>
                                    <p class="plus"> + </p>
                        
                                    </div>
                                                                
                                    </div>
                                            
                                    `
                                    swal.fire({icon: 'success',
                                        text: `Add ${cartp[i].name} To Cart Success` ,
                                
                                    })
                                    
                                }

                                
                                $("#product-cart-con").html(html);
                                
                    }


                    




            
    // h/s - number

    if(cartp.length != 0){
        
        Numpcart.style.display = 'flex';
        Numpcart.innerHTML = `${cartp.length}`;
    }

    // end - h/s - number


    


}



function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}
