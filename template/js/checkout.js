import '#template/js/checkout'
import './custom-js/checkout'


storefront.on('widget:@ecomplus/widget-tag-manager', () => {
    setTimeout(() => {
        if($('#cart').length) {
          const $points = document.querySelector('.prices__points')
          let cashback = document.querySelector('.prices__points span').innerText.trim()
          const $money =  `<div id="dinheiro-volta"><span><strong>Cashback! GANHE </strong> <span class="dinheiro"> <strong id="changeMoney">${cashback}</strong></span> em sua próxima compra!</span></div>`
          const $div = document.createElement('div')
          $div.id = 'cashback'
          $div.insertAdjacentElement('afterbegin', $points)
          $div.insertAdjacentHTML('afterbegin', $money)
          $('.cart__list').after($div)
          ecomCart.on('change', ({ data }) => {
            setTimeout(() => {
              let cashback = document.querySelector('.prices__points span').innerText.trim()
              document.getElementById('changeMoney').innerText = cashback
            }, 800)
          })
        }
    }, 800);
  });