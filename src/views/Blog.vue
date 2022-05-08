<template>
  <div class="container">
    <p class="heading">{{ indexPage?.title }}</p>
    <div class="index_descrip" v-html="indexPage?.description"></div>
    <div class="blog_grid">
      <template v-for="post in posts" :key="post.id">
        <router-link class="blog" :to="`/blog/${post.meta.slug}`">
          <div class="content">
            <p class="date">{{ post.date }}</p>
            <p class="title">{{ post.title }}</p>
            <p class="subtext">{{ post.intro }}</p>
          </div>
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>
import BlogService from "../services/BlogService";

export default {
  name: "IndexPage",
  data() {
    return {
      indexPage: null,
      posts: null,
    };
  },
  created() {
    BlogService.getAllPosts()
      .then((response) => {
        this.posts = response.data.items;
      })
      .catch((error) => {
        console.log(error);
      });
    BlogService.getIndexPages()
      .then((response) => {
        this.indexPage = response.data.items[0];
      })
      .catch((error) => {
        console.log(error);
      });

    window.addEventListener("DOMContentLoaded", this.resizeAllGridItems);
    window.addEventListener("resize", this.resizeAllGridItems);
    document.fonts.ready.then(this.resizeAllGridItems);
  },
  updated() {
    this.resizeAllGridItems();
  },
  methods: {
    resizeGridItem(item) {
      let grid = document.getElementsByClassName("blog_grid")[0];
      let rowHeight = parseInt(
        window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
      );
      let rowGap = parseInt(
        window.getComputedStyle(grid).getPropertyValue("grid-gap")
      );
      let rowSpan = Math.ceil(
        (item.querySelector(".content").offsetHeight + rowGap) /
          (rowHeight + rowGap)
      );
      item.style.gridRowEnd = "span " + rowSpan;
    },

    resizeAllGridItems() {
      let allItems = document.getElementsByClassName("blog");
      for (var x = 0; x < allItems.length; x++) {
        this.resizeGridItem(allItems[x]);
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/sass/blog/index_page.sass";
</style>
