Vue.createApp({
  data() {
    return {
      payment: ""
    }
  },

  methods: {
    resetPayment() {
      this.payment = ""
    }
  }
}).mount("#app");