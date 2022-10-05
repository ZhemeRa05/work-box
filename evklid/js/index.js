document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.how-we-work__btn').forEach(function(tabsBtn){
        tabsBtn.addEventListener('click', function(e){
        const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.how-we-work__btn').forEach(function(btn){
        btn.classList.remove('tabs-nav__btn-active')});
        e.currentTarget.classList.add('tabs-nav__btn-active');
    document.querySelectorAll('.how-we-work__info-block').forEach(function(tabsBtn){
        tabsBtn.classList.remove('tabs-item-active')});            
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item-active');    
                });
            });  
            
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pag',
      clickable: true,
    },
    a11y: {
      paginationBulletMessage: 'Слайдер номер {{index}}',}
  });


  $( function() {
    $( "#accordion" ).accordion({active: true,
      collapsible: true,
      heightStyle: "content"
    });
  } );


  document.querySelector('.header__burger-btn').addEventListener('click',function(){
    document.querySelector('.header__menu').classList.toggle('header__menu-activ')
  })
  document.querySelector('.header__menu-cross').addEventListener('click',function(){
    document.querySelector('.header__menu').classList.toggle('header__menu-activ')
  })

  
  document.querySelector('.header__search').addEventListener('click',function(){
    document.querySelector('.header__form-block').classList.toggle('header__search-active')
  })

  document.querySelector('.header__cross').addEventListener('click',function(){
    document.querySelector('.header__form-block').classList.remove('header__search-active')
  })

})
