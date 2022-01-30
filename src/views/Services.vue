<template>
  <div class="main services">
    <h1 class="heading">Забронировать услуги</h1>
    <div class="page-wrapper services__wrapper">
      <div class="book-home" :class="block_book">
        <div class="photo-dots">
          <div class="photo-dots__bottom">
            <img src="@/assets/dots.png" alt="">
          </div>
          <div class="photo-dots__top">
            <img src="@/assets/services1.jpg" alt="">
          </div>
        </div>
        <button class="services__button" @click="status2 = !status2">{{ btnBook }}</button>
        <div :class="book_home">
          <nav>
            <strong>Категории:</strong>
            <div v-for="(size, index) in shirtSizes" :key="index">
              <input type="checkbox" :id="size" :value="size" v-model="selectedSizes">
              <label :for="size">{{ size }}</label>
            </div>
          </nav>
          <ProductDescriptionDrawer2
              :product="product"
              :active="active.product_drawer"
              v-on:close-product-drawer="closeProductDrawer"
          />
          <div class="product-cards-container">
            <div class="card" v-for="(product, index) in filteredPlayers" :key="index">
              <h3>{{ product.name }}</h3>
  
              <h5 class="price">Цена: ${{ product.price.toFixed(2) }}</h5>
              <p class="description">Описание: {{ product.short_description }}</p>
              <p class="text-muted">{{ product.category }}</p>
              <button class="view-product-btn" @click="viewProduct2(product)">Подробнее</button>
            </div>
          </div>
        </div>
      </div>
  
  
      <div class="book-services" :class="block_services">
        <div class="photo-dots">
          <div class="photo-dots__bottom">
            <img src="@/assets/dots.png" alt="">
          </div>
          <div class="photo-dots__top">
            <img src="@/assets/services2.jpg" alt="">
          </div>
        </div>
        <button class="services__button" @click="status = !status">{{ btnServices }}</button>
        <div :class="home">
          <nav>
            <strong>Категории:</strong>
            <div v-for="(size, index) in shirtSizes2" :key="index">
              <input type="checkbox" :id="size" :value="size" v-model="selectedSizes2">
              <label :for="size">{{ size }}</label>
            </div>
          </nav>
          <ProductDescriptionDrawer
              :product2="product2"
              :active="active.product_drawer"
              v-on:close-product-drawer="closeProductDrawer"
          />
          <div class="product-cards-container">
            <div class="card" v-for="(product2, index) in filteredPlayers2" :key="index">
              <h3>{{ product2.name }}</h3>
  
              <h5 class="price">Цена: ${{ product2.price.toFixed(2) }}</h5>
              <p class="description">Описание: {{ product2.short_description }}</p>
              <p class="text-muted">{{ product2.category }}</p>
              <button class="view-product-btn" @click="viewProduct(product2)">Подробнее</button>
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
    home: function () {
      if (this.status === true) {
        return 'show'
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
        return 'show'
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
    img {
      max-width: 400px;
    }
  }

  &__button {
    width: 300px;
    height: 70px;
    margin-top: 50px;
    margin-right: 20px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    background: #6BAEA2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: none;

    font-weight: 500;
    font-size: 22px;
    color: #ffffff;
  }
}

.product-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  width: 80%;
  margin: 10%;
  padding: 10px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 5px gray;

  h5.price {
    color: gray;
  }

  p.description {
    font-size: .85rem;
  }

  p.text-muted {
    color: gray;
  }
}

button.view-product-btn {
  padding: 10px;
  background-color: rgb(79, 160, 187);
  border: none;
  color: white;
  font-weight: bold;
  font-size: 1.15rem;
  border-radius: 5px;
  cursor: pointer;
}

@media (min-width: 500px) {
  .card {
    width: 350px;
    margin: 10px;
  }
}

</style>
