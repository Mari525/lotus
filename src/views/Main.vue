<template>
  <div class="main">
    <div class="page-wrapper">
      <h1 class="heading">База отыха “Каспийский лотос”</h1>
      <div class="promo">
        <div class="photo-dots">
          <div class="photo-dots__bottom">
            <img src="@/assets/dots.png" alt="">
          </div>
          <div class="photo-dots__top">
            <img src="@/assets/main-promo.jpg" alt="">
          </div>
        </div>
        <div class="promo__wrapper">
          <div>
            <p class="promo__text">
              Проведите незабываемый отдых в живописном месте!
            </p>
            <p class="promo__text">
              Рекламный текст рекламный текст рекламный текст
            </p>
          </div>
          <router-link class="promo__link" to="/services">Забронировать домик</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main"
}
</script>

<style lang="scss">
.promo {
  display: flex;
  justify-content: space-between;

  &__wrapper {
    max-width: 420px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  &__text {
    color: #000000;
  }

  &__link {
    display: block;
    width: 300px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-image: linear-gradient(to right, #6BAEA2 0%, #8addcb 50%, #6BAEA2 100%);
    background-size: 200% auto;
    transition: 0.8s;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

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