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

* {
  box-sizing: border-box;
}

html, body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}

body {
  font-family: "Fira Sans", Arial, Helvetica, sans-serif;
  font-size: 18px;
}

.main {
  padding: 50px 0 100px;
  background: linear-gradient(360deg, rgba(220, 234, 255, 0.2) -15.92%, rgba(187, 243, 255, 0.138) 83.67%), #F5FCFD;
}

.page-wrapper {
  max-width: 1050px;
  margin: 0 auto;
}

.heading {
  margin-bottom: 80px;

  color: #214261;
  font-size: 36px;
  font-weight: 600;
  text-align: center;
}

</style>
