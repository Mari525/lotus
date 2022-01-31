<template>
  <div class="main about">
    <div class="page-wrapper">
      <h1 class="heading">О нас</h1>
      <div class="about__text-pic">
        <div>
          <p class="about__text">
            База отдыха "Каспийский Лотос" располагается в небольшом селе Вышка. Основные услуги, которые предоставляются постояльцам - это частная парковка и возможно размещения с домашними животными.
          </p>
          <p class="about__text">
            Номера оформлены в едином стиле. В каждом имеется односпальная кровать, прикроватная тумбочка и вешалка для хранения вещей.
          </p>
          <p class="about__text">
            На небольшой кухне имеется холодильник, микроволновая печь и электрический чайник.
          </p>
          <p class="about__text">
            Расстояние до ближайшего аэропорта 80 км, а до железнодорожного вокзала около 89 км езды.
          </p>
        </div>
        <img src="@/assets/about1.jpg" alt="">
      </div>
      <div class="about__gallery">
        <img src="@/assets/about2.jpg" alt="">
        <img src="@/assets/about3.jpg" alt="">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style lang="scss">
.about {
  &__text-pic {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 70px;

    img {
      max-width: 317px;
    }
  }

  &__text {
    color: #000000;
    max-width: 600px;
  }

  &__gallery {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    img {
      max-width: 500px;
    }
  }
}
</style>