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
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss">

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

</style>