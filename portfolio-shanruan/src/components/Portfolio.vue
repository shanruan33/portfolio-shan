<template>
  <div class="site-section site-portfolio">
    <div class="container">
      <div class="row mb-5 align-items-center">
        <div class="col-md-12 col-lg-6 mb-4 mb-lg-0" data-aos="fade-up">
          <h2 id="works">Hey, I'm Shan Ruan</h2>
          <p class="mb-0">Frontend Developer &amp; UX Designer</p>
        </div>
        <div class="col-md-12 col-lg-6 text-left text-lg-right">
          <div class="filters">
            <a
              v-for="(val, key) in option.getFilterData"
              v-bind:key="key"
              :class="[key===filterOption? 'is-checked' : '']"
              @click="filter(key)"
            >{{key}}</a>
          </div>
        </div>
      </div>
      <div>
        <isotope
          ref="cpt"
          id="portfolio-grid"
          class="row no-gutter"
          data-aos="fade-up"
          data-aos-delay="200"
          v-images-loaded:on.progress="layout"
          :item-selector="'element-item'"
          :list="list"
          :options="option"
          @filter="filterOption=arguments[0]"
        >
          <div
            v-for="(element,index) in list"
            :class="[element.category]"
            :key="index"
            class="item col-sm-6 col-md-4 col-lg-4 mb-4"
          >
            <!-- <a href="#" class="item-wrap"> -->
            <router-link to="/work" class="item-wrap">
              <div class="work-info">
                <h3 class="name">{{element.name}}</h3>
                <p class="description">{{element.description}}</p>
                <span>{{element.category}}</span>
              </div>
              <img class="img-fluid" :src="require(`@/assets/img/${element.img}.png`)" />
              <!-- </a> -->
            </router-link>
          </div>
        </isotope>
      </div>
    </div>
  </div>
</template>

<script>
import isotope from "vueisotope";
import Vue from "vue";
import VueLodash from "vue-lodash";
import lodash from "lodash";
import imagesLoaded from "vue-images-loaded";

Vue.use(VueLodash, { name: "custom", lodash: lodash });

export default {
  name: "Portfolio",
  directives: {
    imagesLoaded
  },
  components: {
    isotope
  },
  data() {
    return {
      list: [
        {
          name: "Flow & Wellness Studio",
          description: "React E-Commerce",
          img: "flow",
          featured: true,
          category: "Web_Dev",
          react: true
        },
        {
          name: "PlantMe",
          description: "Landing Page",
          img: "plantme",
          category: "Web_Dev"
        },
        {
          name: "Wine Wiki",
          description: "Full-stack",
          img: "winewiki",
          featured: true,
          category: "Web_Dev"
        },
        {
          name: "BIXI",
          description: "Physical Interface",
          img: "bixi",
          category: "UI/UX"
        },

        {
          name: "Self-lightening Mirror",
          description: "Arduino",
          img: "mirror",
          category: "other"
        },
        {
          name: "Euphoric",
          description: "ZIM JS",
          img: "euphoric",
          category: "game"
        }
      ],
      selected: null,
      filterOption: "show all",
      option: {
        itemSelector: ".element-item",
        getFilterData: {
          All: function() {
            return true;
          },
          Featured: function(el) {
            return !!el.featured;
          },
          React: function(el) {
            return !!el.react;
          },
          // transition: function(el) {
          //   return el.category === "transition";
          // },
          Web_Dev: function(el) {
            return el.category === "Web_Dev";
          },
          "UI/UX": function(el) {
            return el.category === "UI/UX";
          },
          Game: function(el) {
            return el.category === "game";
          },
          Other: function(el) {
            return el.category === "other";
          }

          // "react but not transition": function(el) {
          //   return !!el.react && el.category !== "transition";
          // },
          // "number > 50": function(el) {
          //   return el.number > 50;
          // },
          // "name ends with ium": function(el) {
          //   return el.name.match(/ium$/);
          // }
        }
      }
    };
  },
  methods: {
    filter: function(key) {
      this.$refs.cpt.filter(key);
    },
    layout() {
      this.$refs.cpt.layout("masonry");
    }
  }
};
</script>

<style>
/* @import "../assets/vendor/bootstrap/css/bootstrap.min.css"; */
</style>