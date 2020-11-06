import FallbackElement from "../components/FallbackElement.vue"

export default {
  components: { FallbackElement },
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
  methods: {
    elementType(element) {
      const name = element.element_type
      if (this.$options.components[name]) {
        return name
      }
      return "FallbackElement"
    },
    elementByName(name) {
      return this.elementsByName(name)[0]
    },
    elementsByName(name) {
      return this.page.elements.filter((e) => e.element_type === name)
    },
  },
}
