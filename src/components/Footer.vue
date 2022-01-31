<template>
	<div class="footer">
		<div class="footer__wrapper">
			<div class="footer__nav">
					<router-link class="footer__link" :class="{active: $route.name === 'Main'}" to="/">Главная</router-link>
					<router-link class="footer__link" :class="{active: $route.name === 'Services'}" to="/services">Услуги</router-link>
					<router-link class="footer__link" :class="{active: $route.name === 'About'}" to="/about">О нас</router-link>
					<router-link class="footer__link" :class="{active: $route.name === 'Contacts'}" to="/contacts">Контакты</router-link>
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
  name: "Footer"
}
</script>

<style lang="scss">

.footer {
  padding: 80px 0 20px;
  background-color: #214261;
  color: #ffffff;

  &__wrapper {
    max-width: 1300px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, min-max(100px, 1fr));
  }

  &__nav {
    grid-column: 10 / 12;
  }

  &__link {
    margin-right: 50px;
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }

  &__contacts {
    grid-column: 13 / 15;

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
    margin-top: 40px;
    text-align: center;
  }
}

</style>