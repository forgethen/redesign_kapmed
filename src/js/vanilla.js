const openActivityHandler = (list) => {
  list.forEach((x) => {
    x.onclick = () => {
      const parent = x.closest('.block')
      parent.classList.toggle('opened')
    }
  })
}

const payload = () => {
  const action_buttons = document.querySelectorAll('.activity-action')
  if (action_buttons.length) openActivityHandler(action_buttons)
}

document.addEventListener("DOMContentLoaded", payload)
//# sourceMappingURL=vanilla.js.map
