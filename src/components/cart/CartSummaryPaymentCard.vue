<template>
<div>
  <h3 class="cart__total">Полная стоимость: {{ cart_total.toFixed(2) }}</h3>

  <button class="cart__button">Оплатить</button>
</div>
</template>

<script>
export default {
  name: "CartSummaryPaymentCard",
  computed: {
    cart_total() {
      return this.$store.getters.cartTotal
    }
  }
}
</script>

<style lang="scss">
.cart {
    &__total {
      text-align: center;
      margin-top: 60px;
      margin-bottom: 40px;
    }

    &__button {
    width: 250px;
    height: 50px;
    margin: 0 auto 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-image: linear-gradient(to right, #6BAEA2 0%, #8addcb 50%, #6BAEA2 100%);
    background-size: 200% auto;
    transition: 0.8s;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: none;

    font-family: "Fira Sans", Arial, Helvetica, sans-serif;
    color: #ffffff;
    font-weight: 500;
    font-size: 20px;
    text-decoration: none;

    &:hover {
      background-position: right center;
    }
  }
}
</style>