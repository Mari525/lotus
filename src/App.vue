<template>
  <div class="header">
    <div class="header__wrapper">
      <div class="logo">
        <img src="@/assets/logo.png" alt="logo">
      </div>
      <div class="nav">
        <div>
          <router-link class="nav__link" :class="{active: $route.name === 'Main'}" to="/">Главная</router-link>
          <router-link class="nav__link" :class="{active: $route.name === 'Services'}" to="/services">Услуги</router-link>
          <router-link class="nav__link" :class="{active: $route.name === 'About'}" to="/about">О нас</router-link>
          <router-link class="nav__link" :class="{active: $route.name === 'Contacts'}" to="/contacts">Контакты</router-link>
        </div>
      </div>
      <a href="#" class="header__phone">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.8826 29.1422L26.9136 29.0927L30 22.8279L20.9842 16.066L16.836 19.177C15.2717 19.0839 13.7957 18.4205 12.6875 17.3123C11.5794 16.2042 10.916 14.7282 10.8229 13.1638L13.9339 9.01568L7.1722 0L0.959773 3.06074L0.907321 3.0865L0.857836 3.11753C0.594655 3.28087 0.377657 3.50885 0.227502 3.77977C0.0773469 4.05068 -0.000968187 4.35552 9.03442e-06 4.66527L8.96376e-06 6.28181C8.8276e-06 9.39653 0.613499 12.4807 1.80545 15.3584C2.99741 18.236 4.74449 20.8507 6.94693 23.0531C9.14937 25.2556 11.7641 27.0026 14.6417 28.1946C17.5193 29.3865 20.6035 30 23.7183 30H25.3349C25.6446 30.001 25.9495 29.9227 26.2204 29.7725C26.4913 29.6224 26.7193 29.4054 26.8826 29.1422ZM23.7183 27.6849C11.9165 27.6849 2.31514 18.0835 2.31514 6.28181V4.97376L6.47245 2.92589L11.0401 9.01612L8.49718 12.4068V12.7927C8.49976 15.1021 9.41832 17.3162 11.0513 18.9492C12.6843 20.5822 14.8984 21.5007 17.2078 21.5033H17.5937L20.9843 18.9604L27.0742 23.5275L25.0259 27.6849H23.7183Z" fill="#344948"/>
        </svg>
        +7(700)001-18-88
      </a>
      <router-link class="header__cart" :class="{active: $route.name === 'Cart'}" to="/cart">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 24C7.35 24 6.015 25.35 6.015 27C6.015 28.65 7.35 30 9 30C10.65 30 12 28.65 12 27C12 25.35 10.65 24 9 24ZM0 0V3H3L8.4 14.385L6.375 18.06C6.135 18.48 6 18.975 6 19.5C6 21.15 7.35 22.5 9 22.5H27V19.5H9.63C9.42 19.5 9.255 19.335 9.255 19.125L9.3 18.945L10.65 16.5H21.825C22.95 16.5 23.94 15.885 24.45 14.955L29.82 5.22C29.94 5.01 30 4.755 30 4.5C30 3.675 29.325 3 28.5 3H6.315L4.905 0H0ZM24 24C22.35 24 21.015 25.35 21.015 27C21.015 28.65 22.35 30 24 30C25.65 30 27 28.65 27 27C27 25.35 25.65 24 24 24Z" fill="#283837"/>
      </svg>
        Корзина
      </router-link>
    </div>
  </div>
  <router-view/>
  <div class="footer">
    <div class="footer__wrapper">
      <div class="footer__nav">
            <router-link class="nav__link" :class="{active: $route.name === 'Main'}" to="/">Главная</router-link>
            <router-link class="nav__link" :class="{active: $route.name === 'Services'}" to="/services">Услуги</router-link>
            <router-link class="nav__link" :class="{active: $route.name === 'About'}" to="/about">О нас</router-link>
            <router-link class="nav__link" :class="{active: $route.name === 'Contacts'}" to="/contacts">Контакты</router-link>
      </div>
      <div class="footer__contacts">
        <a class="footer__phone" href="#">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.7139 21.371L19.7366 21.3346L22 16.7404L15.3884 11.7818L12.3464 14.0631C11.1992 13.9949 10.1168 13.5084 9.3042 12.6957C8.49157 11.8831 8.00507 10.8007 7.93682 9.65346L10.2182 6.6115L5.25961 0L0.703834 2.24454L0.665368 2.26343L0.629079 2.28619C0.43608 2.40597 0.276949 2.57316 0.166835 2.77183C0.0567211 2.9705 -0.000710004 3.19405 6.62524e-06 3.4212L6.57342e-06 4.60666C6.47357e-06 6.89079 0.449899 9.15255 1.324 11.2628C2.1981 13.3731 3.47929 15.2905 5.09442 16.9056C6.70954 18.5207 8.62697 19.8019 10.7372 20.676C12.8475 21.5501 15.1093 22 17.3934 22H18.5789C18.806 22.0007 19.0296 21.9433 19.2283 21.8332C19.4269 21.7231 19.5941 21.564 19.7139 21.371ZM17.3934 20.3022C8.7388 20.3022 1.69777 13.2612 1.69777 4.60666V3.64742L4.74646 2.14565L8.09609 6.61182L6.23126 9.09835V9.38129C6.23316 11.0749 6.90677 12.6985 8.10431 13.8961C9.30184 15.0936 10.9255 15.7672 12.6191 15.7691H12.902L15.3885 13.9043L19.8544 17.2535L18.3524 20.3022H17.3934Z" fill="white"/>
          </svg>
          +7 (700) 001-18-88
        </a>
        <a href="#" class="footer__email">
          <svg width="20" height="16" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 14H2V4L10 9L18 4V14ZM10 7L2 2H18L10 7Z" fill="#FCFCFC"/>
          </svg>
          caspianlotus@gmail.com
        </a>
      </div>
    </div>
    <p class="footer__copyright">© 2022</p>
  </div>
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

html, body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  box-sizing: border-box;
}

body {
  font-family: "Fira Sans", Arial, Helvetica, sans-serif;
  font-size: 18px;
}

.header {
  background-color: #A6C6C0;

  &__wrapper {
    max-width: 1250px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    color: #344948;
    text-decoration: none;
  }

  &__phone,
  &__cart {
    display: flex;
    align-items: center;

    svg {
      margin-right: 7px;
      width: 30px;
      height: 30px;
      fill: #283837;
    }
}
}

.logo {
  width: 240px;
}

.nav {
  &__link {
    margin-right: 40px;
  }
}

.footer {
  padding: 50px 0 15px;
  background-color: #214261;
  color: #ffffff;

  &__wrapper {
    max-width: 800px;
    margin: 0 auto; 
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }

  &__contacts {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__phone {
    margin-bottom: 15px;
  }

  &__phone,
  &__email {
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }

  &__copyright {
    margin-top: 30px;
    text-align: center;
  }
}

</style>
