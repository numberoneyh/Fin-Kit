const langBtn = document.querySelectorAll('#lang')
const allLang = ['Ru', 'En']

langBtn.forEach(btn => {
  btn.addEventListener('click', e => {
    if (!btn.classList.contains('header-nav__btn--active')) {
      langBtn.forEach(item => item.classList.remove('header-nav__btn--active'))
      e.currentTarget.classList.add('header-nav__btn--active')
      let lang = e.target.innerText
      location.href = window.location.pathname + '#' + lang

      let hash = window.location.hash
      hash = hash.substr(1)
      if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en'
        location.reload()
      }
      e.target.innerText = hash
      document.querySelector('title').innerHTML = langArr['title'][hash]
      for (let key in langArr) {
        let elem = document.querySelector('.lang-' + key)
        if (elem) {
          elem.innerHTML = langArr[key][hash]
        }
      }
    }
  })
})

langBtn[0].click()
