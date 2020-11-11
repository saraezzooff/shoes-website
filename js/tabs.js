const new_arrivals       = document.getElementById('new-arrivals'),
      feature_products   = document.getElementById('feature-products'),
      sale_items         = document.getElementById('sale-items'),
      newArrival_btn     = document.getElementById('newArrival-btn'),
      featureProduct_btn = document.getElementById('featureProduct-btn'),
      saleItems_btn      = document.getElementById('saleItems-btn'),
      tab_header         = document.querySelector('.tab-header'),
      header_btns        = tab_header.querySelectorAll('div');

console.log(header_btns);
newArrival_btn.addEventListener('click',()=>{
    new_arrivals.style.transform = "translateX(0%)";
    feature_products.style.transform = "translateX(100%)";
    sale_items.style.transform = "translateX(100%)";
    delActive();
    newArrival_btn.classList.add('active');
});


featureProduct_btn.addEventListener('click',()=>{
    new_arrivals.style.transform = "translateX(100%)";
    feature_products.style.transform = "translateX(0%)";
    sale_items.style.transform = "translateX(100%)";
    delActive();
    featureProduct_btn.classList.add('active');

});

saleItems_btn.addEventListener('click',()=>{
    new_arrivals.style.transform = "translateX(100%)";
    feature_products.style.transform = "translateX(100%)";
    sale_items.style.transform = "translateX(0%)";
    delActive();
    saleItems_btn.classList.add('active');

});

function delActive(){
    for(let i=0;i<3;i++){
        if(header_btns[i].classList.value === "active"){
            header_btns[i].classList.remove('active');
        }
    }

}