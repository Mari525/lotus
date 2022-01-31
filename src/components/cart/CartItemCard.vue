<template>
<div class="cart__table">
  <div class="cart__item">
    <h3>{{ product.name }}</h3>

    <b>Количество: {{ product.quantity }}</b>
    <b>Сумма: {{ item_cost.toFixed(2) }} </b>
  </div>
</div>
</template>

<script>
export default {
  name: "CartItemCard",
  props: ['product'],
  computed: {
    description() {
      return this.product.description.substring(0, 120)
    },
    item_cost() {
      return this.product.price * this.product.quantity
    }
  }
}
</script>

<style lang="scss">
.cart {
  &__table {
    width: 90%;
    margin: 40px auto;
    background-color: white;
    box-shadow: 0 0 5px gray;
    border-radius: 5px;
    padding: 10px 20px;
  }

  &__item {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>
