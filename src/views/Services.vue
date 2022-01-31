<template>
  <div class="main services">
    <h1 class="heading"> {{ head }} </h1>
    <div :class="wrappers">
      <div class="book-home">
        <div :class="nope">
          <div class="photo-dots__bottom">
            <img src="@/assets/dots.png" alt="">
          </div>
          <div class="photo-dots__top">
            <img src="@/assets/services1.jpg" alt="">
          </div>
        </div>
        <button class="services__button" @click="status2 = !status2" :class="block_book">{{ btnBook }}</button>
        <div :class="book_home">
          <div class="filters">
            <h2 class="filters__heading">Категории:</h2>
            <div v-for="(size, index) in shirtSizes" :key="index">
              <input type="checkbox" :id="size" :value="size" v-model="selectedSizes">
              <label :for="size">{{ size }}</label>
            </div>
          </div>
          <ProductDescriptionDrawer2
              :product="product"
              :active="active.product_drawer"
              v-on:close-product-drawer="closeProductDrawer"
          />
          <div class="cards">
            <div class="card" v-for="(product, index) in filteredPlayers" :key="index">
              <span class="card__category">{{ product.category }}</span>
              <h3 class="card__heading">{{ product.name }}</h3>
              <img class="card__img" src="@/assets/services-house.jpg" alt="">
              <b class="card__price">Цена: ${{ product.price.toFixed(2) }}</b>
              <p class="card__descr">{{ product.short_description }}</p>
              <button class="card__button" @click="viewProduct2(product)">Подробнее</button>
            </div>
          </div>
        </div>
      </div>
  
  
      <div class="book-services" :class="block_services">
        <div :class="nope">
          <div class="photo-dots__bottom">
            <img src="@/assets/dots.png" alt="">
          </div>
          <div class="photo-dots__top">
            <img src="@/assets/services2.jpg" alt="">
          </div>
        </div>
        <button class="services__button" @click="status = !status" :class="block_services">{{ btnServices }}</button>
        <div :class="home">
          <div class="filters">
            <h2 class="filters__heading">Категории:</h2>
            <div class="filters__item" v-for="(size, index) in shirtSizes2" :key="index">
              <input type="checkbox" :id="size" :value="size" v-model="selectedSizes2">
              <label class="filters__label" :for="size">{{ size }}</label>
            </div>
          </div>
          <ProductDescriptionDrawer
              :product2="product2"
              :active="active.product_drawer"
              v-on:close-product-drawer="closeProductDrawer"
          />
          <div class="cards">
            <div class="card" v-for="(product2, index) in filteredPlayers2" :key="index">
              <span class="card__category">{{ product2.category }}</span>
              <h3 class="card__heading">{{ product2.name }}</h3>
              <img class="card__img" src="@/assets/services2.jpg" alt="">
              <b class="card__price">Цена: ${{ product2.price.toFixed(2) }}</b>
              <p class="card__descr">{{ product2.short_description }}</p>
              <button class="card__button" @click="viewProduct(product2)">Подробнее</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import items from '../data/items.js'
import ProductDescriptionDrawer from "../components/products/ProductDescriptionDrawer";
import ProductDescriptionDrawer2 from "../components/products/ProductDescriptionDrawer2";
import houses from "../data/houses";

export default {
  name: 'Services',
  components: {
    ProductDescriptionDrawer,
    ProductDescriptionDrawer2
  },
  data() {
    return {
      items: items,
      houses: houses,
      product: null,
      product2: null,
      active: {
        product_drawer: false
      },
      status: false,
      status2: false,
      selectedSizes: [],
      selectedSizes2: []
    }
  },
  methods: {
    viewProduct(product2) {
      this.product2 = product2
      this.active.product_drawer = true
      console.log(this.product2)
    },
    viewProduct2(product) {
      this.product = product
      this.active.product_drawer = true
      console.log(this.product)
    },
    closeProductDrawer() {
      this.active.product_drawer = false
    },
  },
  computed: {
    shirtSizes() {
      return [...new Set(this.houses.map(product => product.category))];
    },
    shirtSizes2() {
      return [...new Set(this.items.map(product2 => product2.category))];
    },
    filteredPlayers() {
      if(!this.selectedSizes.length) return this.houses

      return this.houses.filter(product => {
        return this.selectedSizes.includes(product.category)
      })
    },
    filteredPlayers2() {
      if(!this.selectedSizes2.length) return this.items

      return this.items.filter(product2 => {
        return this.selectedSizes2.includes(product2.category)
      })
    },
    wrappers: function() {
      if (this.status === true || this.status2 === true) {
        return 'page-wrapper'
      }
      return 'page-wrapper services__wrapper'
    },
    head: function() {
      if (this.status2 === true) {
        return 'Забронировать домик'
      }
      else if (this.status){
        return 'Дополнительные услуги'
      }
      return 'Забронировать услуги'
    },
    nope: function () {
      if (this.status2 === true || this.status === true) {
        return 'non_show'
      }
      return 'photo-dots'
    },
    home: function () {
      if (this.status === true) {
        return 'services__flex-wrapper'
      } else {
        return 'non_show'
      }
    },
    btnServices: function () {
      if (this.status === false) {
        return 'Другие услуги'
      }
      return 'Назад'
    },
    block_book: function() {
      if (this.status === true) {
        return 'non_show'
      } else {
        return 'show'
      }
    },
    book_home: function () {
      if (this.status2 === true) {
        return 'services__flex-wrapper'
      } else {
        return 'non_show'
      }
    },
    btnBook: function () {
      if (this.status2 === false) {
        return 'Забронировать домик'
      }
      return 'Назад'
    },
    block_services: function() {
      if (this.status2 === true) {
        return 'non_show'
      } else {
        return 'show'
      }
    },

  }
}
</script>

<style lang="scss">

.services {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    
  }

  .photo-dots {
    margin-bottom: 50px;
    img {
      max-width: 400px;
    }
  }

  &__button {
    width: 300px;
    height: 70px;
    margin-right: 20px;
    
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
    font-weight: 500;
    font-size: 20px;
    color: #ffffff;

    &:hover {
      background-position: right center;
    }
  }

  &__flex-wrapper {
    display: grid;
    grid-template-columns: repeat(24, 1fr);

    margin-top: 50px;
    width: 100%;
  }
}

.filters {
  height: 300px;
  padding: 30px;
  grid-column: 1 / 6;

  background-color: #214261;
  color: #ffffff;
  font-size: 16px;
  border-radius: 5px;

  &__heading {
    margin-bottom: 30px;
    font-weight: 500;
    font-size: 20px;
  }

  &__item {
    margin-bottom: 30px;
  }

  &__label {
    margin-left: 5px;
  }
}

.cards {
  grid-column: 8 / 25;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.show {
  display: block;
}

.non_show {
  display: none;
}

.book-home,
.book-services {
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 450px;
  }
}

.card {
  width: 340px;
  height: 450px;
  margin-bottom: 30px;
  padding: 20px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-radius: 5px;
  background: #CBE3DF;
  border: 1px solid #A5C6C0;

  &__category {
    align-self: flex-start;
    font-weight: 500;
    font-size: 13px;
    color: #6A7073;
  }

  &__heading {
    margin: 0;
    font-weight: 600;
    font-size: 20px;
    color: rgba(13, 24, 32, 0.85);
  }

  &__img {
    width: 270px;
  }

  &__price {
    margin-top: 5px;
    font-weight: 600;
    font-size: 20px;
    color: #0B8C56;
  }

  &__descr {
    font-weight: 500;
    font-size: 16px;
    color: rgba(13, 24, 32, 0.85);
  }

  &__button {
    width: 200px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    background: #6BAEA2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: none;

    font-family: "Fira Sans", Arial, Helvetica, sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: #ffffff;
  }
}

</style>
