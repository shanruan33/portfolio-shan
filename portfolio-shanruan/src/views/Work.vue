<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link>|
    </div>
    <div class="about">
      <h1>This is an about page</h1>
    </div>
    <SingleWork></SingleWork>
  </div>
</template>


<script>
import SingleWork from "@/components/SingleWork";
export default {
  name: "Work",
  component: {
    SingleWork
  }
};
</script>

<style>
</style>
