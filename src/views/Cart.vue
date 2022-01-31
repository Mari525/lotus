<template>
  <div class="main">
    <h1 class="cart__heading">Корзина</h1>

    <CartItemCard
        v-for="product in products"
        :key="product.id"
        :product="product"
    />

    <CartSummaryPaymentCard />
  </div>
</template>


<script>
import CartItemCard from "../components/cart/CartItemCard";
import CartSummaryPaymentCard from "../components/cart/CartSummaryPaymentCard";

export default {
  components: {CartSummaryPaymentCard, CartItemCard},
  computed: {
    products() {
      return this.$store.getters.cartItems
    }
  }
}
</script>

<style lang="scss">
.cart {
  &__heading {
    text-align: center;
  }
}
</style>