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
  elm.closest('.activity-wrap').classList.toggle('opened')
}


const openSitemap = () => {
  document.querySelector('.sitemap').classList.toggle('hidden')
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
        if (preloader !== null)
          preloader.remove()
      }, 500);
    }
  }, 100);
}

const staticHeader = () => {
  const header = document.querySelector('header')
  const toTop = document.querySelector('a.to-top')
  if (!isNaN(header)) return false
  const topHeight = header.offsetHeight
  const indent = header.querySelector('.top-container').offsetHeight
  const scrollTop = window.scrollY
  const cityPopup = document.querySelector('#citySelectPopUp')
  if (scrollTop >= indent) {
    header.classList.add('static');
    // header.style.top = `-${topHeight}px`;
    // header.style.transition = '.5s ease-in-out';
    header.style.top = `-${indent}px`;
    cityPopup.style.top = header.offsetHeight + 'px';
    toTop.classList.add('show')
  }
  else {
    cityPopup.style.top = '';
    header.classList.remove('static');
    // header.style.transition = 'none';
    header.style.top = `0`;
    toTop.classList.remove('show')
  }
}

const menuHover = (elm) => {
    elm.classList.add('hovered')
}

const menuUnHover = () => {
  const elm = document.querySelector('.headerMenu.desktop .hovered')
    elm.classList.remove('hovered')
}

const payload = () => {

  /* preloader */

  const body = document.querySelector('body')
  if (body.hasAttribute('data-preloader')) {
    let node = document.createElement('div')
    node.classList.add('preloader')
    node.innerHTML = '<div class="blue"><img src="/local/templates/.default/img/static/blue.svg"></div><img class="red" src="/local/templates/.default/img/static/red.svg"><div class="name"><img src="/local/templates/.default/img/static/text.svg"></div>'
    body.appendChild(node)
    setTimeout(checkReady, 3200)
  }

  // const action_buttons = document.querySelectorAll('.activity-action')
  const action_buttons = document.querySelectorAll('.block .title-block')
  if (action_buttons.length) openActivityHandler(action_buttons)

  document.addEventListener('scroll', (e) => {
    staticHeader()
  })

  staticHeader()
}

document.addEventListener("DOMContentLoaded", payload)

//# sourceMappingURL=vanilla.js.map

//# sourceMappingURL=vanilla.js.map
