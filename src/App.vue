<template>
  <Header />
  <router-view />
  <Footer />  
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

  export default {
  components: { 
    Header,
    Footer 
  },
    mounted() {
      this.$store.commit('updateCartFromLocalStorage')
    },
    methods: {
      viewProduct2(product2) {
        this.product2 = product2
        this.active.product_drawer = true
        console.log(this.product2)
      },
    }
  }
</script>

<style lang="scss">

html, body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  box-sizing: border-box;
}

body {
  font-family: "Fira Sans", Arial, Helvetica, sans-serif;
  font-size: 18px;
}

</style>
