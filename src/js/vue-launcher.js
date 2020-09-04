const vueSliderLauncher = (root, data, width) => {
  new Vue({
    el: root,
    data() {
      return {
        slides: data,
        width: width,
        active_idx: 0,
        content_container: 0
      }
    },
    methods: {
      getSize() {
        let ww = document.querySelector('body').offsetWidth
        let content_container = document.querySelector('.slider-root')
        if (ww < 641) {
          this.width = content_container.offsetWidth
          let width = this.width * this.slides.length + 16 * (this.slides.length - 1)
          return width
        }
        else
        {
          let width = this.width * this.slides.length + 16 * (this.slides.length - 1)
          return width
        }
      },
      initialization() {

        let container = document.querySelector('.container')
        let content_container = document.querySelector('.content-container')
        let content_inner = container.offsetWidth * .75 + (content_container.offsetWidth - container.offsetWidth) / 2
        this.content_container = content_inner - 20
        let ww = document.querySelector('body').offsetWidth
        if (ww < 641) {
          this.content_container = content_inner + 80
        }
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
      window.addEventListener('resize', () => {
        this.initialization()
      })
    }
  })
}

//# sourceMappingURL=vue-launcher.js.map
