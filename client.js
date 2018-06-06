var vm = new Vue({
  el: "#app",
  data() {
    return { images: [], clientID: "d1e55bf6704f4b99e93ae57786f434b354a42e5394d5aa34705720922c6cd652", query: "Dogs" };
  },
  watch: {},
  created() {},
  methods: {
    getImages() {
      axios
        .get(`https://api.unsplash.com/search/photos?page=2&per_page=24&query=${this.query}&client_id=${this.clientID}`)
        .then((response) => {
          if (response.data.results.length) {
            console.log(response);
            this.images = response.data.results;
            console.log(this.images);
          } else {
            console.log(response);
          }
        });
    }
  }
});

vm.getImages();
