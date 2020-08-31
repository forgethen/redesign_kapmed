const openActivityHandler = (list) => {
  list.forEach((x) => {
    x.onclick = () => {
      const parent = x.closest('.block')
      parent.classList.toggle('opened')
    }
  })
}

const openSupportLevel = (elm) => {
  elm.closest('.support-level').classList.toggle('closed')
}

const showMeMore = (elm) => {
  // this.classList.toggle('showoff')
  elm.closest('.activity-wrap').classList.toggle('opened')
}

const switchSearch = () => {
  let body = document.querySelector('body')
  body.classList.toggle('with-search')
}

const switchshowMore = (elm) => {
  elm.closest('.show_more').classList.toggle('show_true')
}

const checkReady = () => {
  const body = document.querySelector('body')
  let interval
  interval = setInterval(() => {
    if (document.readyState === 'complete') {
      clearInterval(interval)
      body.removeAttribute('data-preloader')
      let preloader = document.querySelector('.preloader')
      setTimeout(() => {
        preloader.remove()
      }, 500);
    }
  }, 100);
}

const payload = () => {

  /* preloader */

  const body = document.querySelector('body')
  if (body.hasAttribute('data-preloader')) {
    let node = document.createElement('div')
    node.classList.add('preloader')
    node.innerHTML = '<div class="blue"><img src="src/img/static/blue.svg"></div><img class="red" src="src/img/static/red.svg"><div class="name"><img src="src/img/static/text.svg"></div>'
    body.appendChild(node)
    setTimeout(checkReady, 3200)
  }

  const action_buttons = document.querySelectorAll('.activity-action')
  if (action_buttons.length) openActivityHandler(action_buttons)
}

document.addEventListener("DOMContentLoaded", payload)
//# sourceMappingURL=vanilla.js.map
