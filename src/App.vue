<template>
  <div id="nav">
    <div>
      <router-link :class="{active: $route.name === 'Main'}" to="/">Главная</router-link> |
      <router-link :class="{active: $route.name === 'Services'}" to="/services">Услуги</router-link> |
      <router-link :class="{active: $route.name === 'About'}" to="/about">О нас</router-link> |
      <router-link :class="{active: $route.name === 'Contacts'}" to="/contacts">Контакты</router-link>
    </div>
    <router-link :class="{active: $route.name === 'Cart'}" to="/cart">Корзина</router-link>
  </div>
  <router-view/>
</template>

<script>
  export default {
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html, body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}

body {
  background-color: rgb(245, 245, 245);
}

#nav {
  padding: 10px;
  background-color: white;
  line-height: 30px;
  display: flex;
  justify-content: space-between;

  a {
    font-weight: bold;
    color: darkgray;
    text-decoration: none;
    margin: 0 5px;
    font-size: 1.25rem;

    &.active {
      color: #2c3e50;
    }
  }
}

.text-center {
  text-align: center;
}
</style>
