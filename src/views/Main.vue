<template>
  <div class="main">
    <div class="main__wrapper">
      <h1 class="main__heading">База отыха “Каспийский лотос”</h1>
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
          <p class="promo__text">
            Проведите незабываемый отдых в живописном месте! Рекламный текст рекламный текст рекламный текст
          </p>
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
  .main {
    padding: 50px 0;
    background: linear-gradient(360deg, rgba(220, 234, 255, 0.2) -15.92%, rgba(187, 243, 255, 0.138) 83.67%), #F5FCFD;

    &__wrapper {
      max-width: 1100px;
      margin: 0 auto;
    }

    &__heading {
      margin-bottom: 100px;

      color: #214261;
      font-size: 36px;
      font-weight: 600;
      text-align: center;
    }
  }

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

      background-color: #05e8ba;
      background-image: linear-gradient(315deg, #05e8ba 0%, #087ee1 74%);
      background-size: 200% 100%;
      background-position: 40% 0;
      transition: background-position 0.5s ease;

      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;

      color: #ffffff;
      font-weight: 500;
      font-size: 20px;
      text-decoration: none;

      &:hover {
        background-position: 80% 0;
      }
    }
  }

  .photo-dots {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    position: relative;

    &__top {
      grid-row: 1;
      grid-column: 2 / span 9;
      
      z-index: 1;
    }

    &__bottom {
      grid-column: 1 / span 8;
      grid-row: 1;
      padding-top: 20%;
    }

    img {
      width: 100%;
      display: block;
    }
  }

</style>