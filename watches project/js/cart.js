




const cartContainer = document.querySelector('.cart__container');


window.addEventListener('click' , function (event) {

    if(event.target.hasAttribute('data-cart-home')) {
        const homeCard = event.target.closest('.home__container');
        const productInfo = {
            id: homeCard.dataset.id,
            imgSrc: homeCard.querySelector('.home__img').getAttribute('src'),
            title: homeCard.querySelector('.home__title').innerText,
            price: homeCard.querySelector('.home__price').innerText,

        };

        const itemInCart = cartContainer.querySelector(`[data-id="${productInfo.id}"]`);
        

        if (itemInCart) {
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + 1;
            console.log( itemInCart)
          } else{
    
        
            const cartItemHTML = ` <article class="cart__card" data-id = "${productInfo.id}">
        <div class="cart__box">
            <img src="${ productInfo.imgSrc }" class="cart__img" alt="">
        </div>
        <div class="cart__details">
            <h3 class="cart__title">${ productInfo.title }</h3>
          
           
           <span class="cart__price "> ${ productInfo.price }</span>
           
            <div class="cart__amount">
                <div class="cart__amount-content">
                    <span class="cart__amount-box">
                        <i class='bx bx-minus' data-action="minus"></i>
                    </span>
                    <span class="cart__amount-number" data-counter>1</span>
                    <span class="cart__amount-box">
                        <i class='bx bx-plus' data-action="plus"></i>
                    </span>
                </div>
                <i class='bx bxs-trash-alt cart__amount-trash' data-action = "trash"></i>
            </div>
        </div>
     </article>`
     cartContainer.insertAdjacentHTML('beforeend', cartItemHTML);

    
        }

        toogleCartStatus ()
    };


    if(event.target.hasAttribute('data-cart-featured')) {
        const featuredCard = event.target.closest('.featured__card');
        const productInfo = {
           id: featuredCard.dataset.id,
           imgSrc: featuredCard.querySelector('.featured__img').getAttribute('src'),
           title: featuredCard.querySelector('.featured__title').innerText,
           price: featuredCard.querySelector('.featured__price').innerText,
        }

        const itemInCart = cartContainer.querySelector(`[data-id="${productInfo.id}"]`);
        

        if (itemInCart) {
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + 1;
            console.log( itemInCart)
          } else{
       
        const cartItemHTML = ` <article class="cart__card" data-id = "${productInfo.id}">
        <div class="cart__box">
            <img src="${ productInfo.imgSrc }" class="cart__img" alt="">
        </div>
        <div class="cart__details">
            <h3 class="cart__title">${ productInfo.title }</h3>
            <span class="cart__price">${ productInfo.price }</span>
            <div class="cart__amount">
                <div class="cart__amount-content">
                    <span class="cart__amount-box">
                        <i class='bx bx-minus' data-action = "minus"></i>
                    </span>
                    <span class="cart__amount-number" data-counter >1</span>
                    <span class="cart__amount-box">
                        <i class='bx bx-plus' data-action = "plus"></i>
                    </span>
                </div>
                <i class='bx bxs-trash-alt cart__amount-trash' data-action = "trash"></i>
            </div>
        </div>
     </article>`
     cartContainer.insertAdjacentHTML('beforeend', cartItemHTML);
            
    
        }

        toogleCartStatus ()
    };

    if(event.target.hasAttribute('data-cart-products')) {
        const productsCard = event.target.closest('.products__card');
        const productInfo = {
           id: productsCard.dataset.id,
           imgSrc: productsCard.querySelector('.products__img').getAttribute('src'),
           title: productsCard.querySelector('.products__title').innerText,
           price: productsCard.querySelector('.products__price').innerText,
        }
        
       
        const itemInCart = cartContainer.querySelector(`[data-id="${productInfo.id}"]`);
        

        if (itemInCart) {
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + 1;
            console.log( itemInCart)
          } else{

        const cartItemHTML = ` <article class="cart__card" data-id = "${productInfo.id}">
    <div class="cart__box">
        <img src="${ productInfo.imgSrc }" class="cart__img" alt="">
    </div>
    <div class="cart__details">
        <h3 class="cart__title">${ productInfo.title }</h3>
        <span class="cart__price">${ productInfo.price }</span>
        <div class="cart__amount">
            <div class="cart__amount-content">
                <span class="cart__amount-box">
                    <i class='bx bx-minus'  data-action = "minus"></i>
                </span>
                <span class="cart__amount-number" data-counter>1</span>
                <span class="cart__amount-box">
                    <i class='bx bx-plus'  data-action = "plus"></i>
                </span>
            </div>
            <i class='bx bxs-trash-alt cart__amount-trash' data-action = "trash"></i>
        </div>
    </div>
 </article>`
 
 cartContainer.insertAdjacentHTML('beforeend', cartItemHTML);

            }

            toogleCartStatus ()
     };

    if(event.target.hasAttribute('data-cart-new')) {
        const newCard = event.target.closest('.new__card');
        const productInfo = {
           id: newCard.dataset.id,
           imgSrc: newCard.querySelector('.new__img').getAttribute('src'),
           title: newCard.querySelector('.new__title').innerText,
           price: newCard.querySelector('.new__price').innerText,
        }

        const itemInCart = cartContainer.querySelector(`[data-id="${productInfo.id}"]`);
        

        if (itemInCart) {
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + 1;
            console.log( itemInCart)
          } else{
        
        
        const cartItemHTML = ` <article class="cart__card" data-id = "${productInfo.id}">
        <div class="cart__box">
            <img src="${ productInfo.imgSrc }" class="cart__img" alt="">
        </div>
        <div class="cart__details">
            <h3 class="cart__title">${ productInfo.title }</h3>
            <span class="cart__price">${ productInfo.price }</span>
            <div class="cart__amount">
                <div class="cart__amount-content">
                    <span class="cart__amount-box">
                        <i class='bx bx-minus' data-action = "minus"></i>
                    </span>
                    <span class="cart__amount-number" data-counter>1</span>
                    <span class="cart__amount-box">
                        <i class='bx bx-plus'  data-action = "plus"></i>
                    </span>
                </div>
                <i class='bx bxs-trash-alt cart__amount-trash' data-action = "trash" ></i>
            </div>
        </div>
     </article>`
     cartContainer.insertAdjacentHTML('beforeend', cartItemHTML);

    
         }

         toogleCartStatus ()
        
    }
 
});


    
window.addEventListener('click' , function (event){
   let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
        const counterWrapper = event.target.closest('.cart__card')
        counter = counterWrapper.querySelector('[data-counter]')
    }

    if (event.target.dataset.action === 'plus'){
       
        counter.innerText = ++counter.innerText;
    }

    if (event.target.dataset.action === 'minus'){

        if(parseInt(counter.innerText) > 1){

            counter.innerText = --counter.innerText;
        } else if (event.target.closest('.cart__container') && parseInt(counter.innerText) === 1){
            event.target.closest('.cart__card').remove();
            toogleCartStatus ()
        }

    }

    if (event.target.dataset.action === 'trash'){
        event.target.closest('.cart__card').remove();
        toogleCartStatus ()
    }
});


function toogleCartStatus () {

 const cartEmpty = document.querySelector('.cart__empty')
 const buttonOrder = document.querySelector('.button__order')

    if (cartContainer.children.length > 0){

        cartEmpty.classList.add('none-empty');

    } else {

        cartEmpty.classList.remove('none-empty');
       
    }

    if (cartContainer.children.length < 0){

        buttonOrder.classList.add('none-order');

    } else {

        buttonOrder.classList.remove('none-order');
       
    }


}