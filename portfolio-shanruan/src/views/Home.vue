<template>
  <div id="home">
    <!-- <Nav></Nav> -->

    <main id="main">
      <Portfolio></Portfolio>
      <!-- <Portfolio></Portfolio>
      <Skills></Skills>
      <About></About> -->

      <div class="site-section">
        <div class="container">
          <div class="row justify-content-center text-center mb-4">
            <div class="col-5">
              <h3 id="contact" class="h3 heading contact">Contact Me</h3>
              <p>Email: <a href="mailto:shanruan333@gmail.com?subject=hello">shanruan333@gmail.com</a><br>Mobile: +1 438 6309212</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- <Footer></Footer> -->

    <!-- Vendor JS Files -->
    <!-- <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/jquery/jquery-migrate.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
  <script src="vendor/easing/easing.min.js"></script>
  <script src="vendor/php-email-form/validate.js"></script>
  <script src="vendor/isotope/isotope.pkgd.min.js"></script>
  <script src="vendor/aos/aos.js"></script>
    <script src="vendor/owlcarousel/owl.carousel.min.js"></script>-->

    <!-- Template Main JS File -->
    <!-- <script src="js/main.js"></script>
    <script src="js/bubble.js"></script>-->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// import Nav from "../components/Nav.vue";
// import Footer from "../components/Footer.vue";
// import Skills from '../components/Skills';
// import About from '../components/About';
import Portfolio from '@/components/Portfolio';

export default {
  name: "Home",
  components: {
    // Nav,
    // Footer,
    // Skills,
    // About,
    Portfolio
  }
};
</script>

<style>
/* @import url("https://fonts.googleapis.com/css?family=Inconsolata&display=swap");
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
@import "../assets/css/style.css"; */

</style>