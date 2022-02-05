
window.onload = function () {
    const buyTKs = document.querySelectorAll('.js-buy-ticket')
    const modal = document.querySelector('.buy')
    const modalclose = document.querySelector('.js-close')
    const modalcontainer=document.querySelector('.sum')

    function showTicket() {
        modal.classList.add('open')
    }
    function hideTicket() {
        modal.classList.remove('open')
    }

    for (const buyTK of buyTKs) {
        buyTK.addEventListener('click', showTicket)
    }
    modalclose.addEventListener('click', hideTicket)

    modal.addEventListener('click',hideTicket)

    modalcontainer.addEventListener('click',function(even){
        even.stopPropagation()
    })
}
    

var header = document.getElementById('header')
            var mobileMenu = document.getElementById('iconn-menu')
            var headerHeight = header.clientHeight
    
            // Đóng mở mobile menu
            mobileMenu.onclick = function() {
                var isClosed = header.clientHeight === headerHeight;
                if (isClosed) {
                    header.style.height = 'auto'; 
                } else{
                    header.style.height = null;
                }
            }
            // Tu dong khi chon menu
            
            var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
        for (var i = 0; i < menuItems.length; i++) {
            var menuItem = menuItems[i];
            menuItem.onclick = function(event) {
                var menuParent = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');

              if(!menuParent){
                header.style.height = null;
              }else{
                event.preventDefault();
              }
                
            }
        }
