Vue.createApp({
  data() {
    return {
	    name: "名無し"
    };
  },
  methods: {
    clearName() {
      this.name = "名無し"
    }
  }
}).mount("#app");