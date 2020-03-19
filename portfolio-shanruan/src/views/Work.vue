<template>
  <div class="site-section">
    <div id="nav">
      <router-link to="/">Home</router-link>|
    </div>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-7" data-aos="fade-up">
          <h2 :work="work">{{work.name}}</h2>
          <p>{{work.description}}</p>
        </div>
      </div>
    </div>

    <div class="site-section pb-0">
      <div class="container">
        <div class="row align-items-stretch">
          <div class="col-md-8" data-aos="fade-up">
            <img src="../assets/img/web_1.png" alt="Image" class="img-fluid" />
          </div>
          <div class="col-md-3 ml-auto" data-aos="fade-up" data-aos-delay="100">
            <div class="sticky-content" :work="work">
              <h3 class="h3">{{work.label}}</h3>
              <p class="mb-4">
                <span class="text-muted">{{work.category}}</span>
              </p>
              <!-- 
              <div class="mb-5">
                <p>{{work.description}}</p>
              </div>-->

              <h4 class="h4 mb-3">Technical Sheet</h4>
              <ul class="list-unstyled list-line mb-5">
                <li v-for="tech in work.techs" :key="tech">{{tech}}</li>
                <li></li>
                <li>CMS</li>
                <li>Logo</li>
              </ul>

              <p>
                <a href="#" class="readmore">Demo / Details</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Portfolio v-on:showDetail="changeDetail"></Portfolio>
  </div>
</template>

<script>
import Portfolio from "@/components/Portfolio";
export default {
  name: "SingleWork",
  props: ["element"],
  //   props: {
  //     name: String
  //   }
  component: {
    Portfolio
  },
  data() {
    return {
      work: {
        name: "",
        description: "",
        label: "",
        img: "",
        techs: [],
        category: ""
      }
    };
  },
  mouted() {
    this.changeDetail();
  },
  methods: {
    changeDetail(el) {
      this.work.name = el.name;
      this.work.label = el.label;
      this.work.category = el.category;
      this.work.description = el.description;
      this.work.techs = el.tech;
      console.log(this.$router.currentRoute.path);
    },
  },
  beforeRouteUpdate(to, from, next){
    this.changeDetail();
    next();
  }
};
</script>

<style>
</style>