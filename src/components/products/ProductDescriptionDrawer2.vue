<template>
  <div class="drawer-background" :class="{show: active}" @click="$emit('close-product-drawer')">
  </div>
  <div class="drawer" :class="{show: active}">
    <div class="drawer-close" @click="$emit('close-product-drawer')">
      X
    </div>
    <div v-if="product" class="product-details">
      <h3 class="text-center">{{ product.name }}</h3>
      <p class="description">{{ product.description }}</p>
      <b class="text-center">${{ product.price.toFixed(2) }}</b>

      <div class="cart-total" v-if="product_total">
        <p class="drawer__cart">В корзине: <b>{{ product_total }}</b></p>
      </div>

      <div class="drawer__buttons">
        <button class="drawer__button" @click="addToCart()">Добавить</button>
        <button class="drawer__button" @click="removeFromCart">Удалить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDescriptionDrawer2",
  props: ['product', 'active'],
  methods: {
    addToCart() {
      this.$store.commit('addToCart', this.product)
    },
    removeFromCart() {
      this.$store.commit('removeFromCart', this.product)
    }
  },
  computed: {
    product_total() {
      return this.$store.getters.productQuantity(this.product)
    }
  }
}
</script>

<style lang="scss">
.drawer-background {
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(124, 124, 123, 0.55);
  z-index: 100;
  display: none;
  transition: display .5s;

  &.show {
    display: block;
  }
}

.drawer {
  width: 95vw;
  height: 100vh;
  background-color: white;
  position: fixed;
  top: 0;
  left: -105vw;
  padding: 15px;
  transition: left 1.5s;
  z-index: 101;
  overflow-y: scroll;

  &.show {
    left: 34%;
  }

  &__buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  &__button {
    width: 180px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #6BAEA2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: none;

    font-family: "Fira Sans", Arial, Helvetica, sans-serif;
    color: #ffffff;
    font-weight: 500;
    font-size: 16px;
  }

  &__cart {
    color: #0B8C56;
  }
}

.drawer-close {
  border-radius: 5px;
  border: 2px solid gray;
  color: gray;
  width: 22px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;

  &:hover {
    background-color: lightgray;
  }
}

.product-details {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

@media (min-width: 500px) {
  .drawer {
    width: 450px;
  }
}
</style>
