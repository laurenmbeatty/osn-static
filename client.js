var vm = new Vue({
  el: '#app',
  data() {
    return {images: []}
  },
  watch: {

  },
  created() {
  },
  methods: {
    getImages() {
      axios.get('https://api.unsplash.com/photos/?page=2&per_page=24&client_id=TODOputclientidhere').then(response => {
        if(response.data.length){
          this.images = response.data;
        } else {
          console.log("Error in retrieving images.");
        }
      })
    }
  }
});

vm.getImages();
