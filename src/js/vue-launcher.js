const vueSliderLauncher = (root, data, width) => {
  new Vue({
    el: root,
    data() {
      return {
        thanks: data,
        width: width,
        active_idx: 0,
        content_container: 0
      }
    },
    methods: {
      getSize() {
        let width = this.width * this.thanks.length + 16 * (this.thanks.length - 1)
        return width
      },
      initialization() {
        let container = document.querySelector('.container')
        let content_container = document.querySelector('.content-container')
        let content_inner = container.offsetWidth * .75 + (content_container.offsetWidth - container.offsetWidth) / 2
        this.content_container = content_inner - 20
      },
      getTranslate() {
        let x = this.width + 16
        x = x * this.active_idx * -1
        return x
      },
      switchSlide(nap) {
        this.active_idx += nap
      }
    },
    mounted() {
      this.initialization()
    }
  })
}
//# sourceMappingURL=vue-launcher.js.map
