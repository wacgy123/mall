<template>
  <swiper :options="swiperOptions">
    <swiper-slide v-for="banner of banners" :key="banner.id">
      <a :href="banner.link">
        <img class="swiper-img" :src="banner.imgUrl" :alt="banner.title">
      </a>
    </swiper-slide>
    <template v-slot:pagination>
      <div class="swiper-pagination"></div>
    </template>
  </swiper>
</template>

<script>
  import {Swiper, SwiperSlide} from "vue-awesome-swiper"
  import 'swiper/css/swiper.css'

  export default {
    name: "HomeSwiper",
    props:{
      banners:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    data(){
      return{
        swiperOptions: {
          // 参数选项,显示小点
          pagination:{
            el:'.swiper-pagination'
          },
          //循环
          loop: true,
          //每张播放时长3秒，自动播放
          autoplay: {
            delay:3000,
            disableOnInteraction:false
          },
          //滑动速度
          speed: 1000,
        }
      }
    },
    components:{Swiper,SwiperSlide}
  }
</script>

<style scoped>
  .swiper-img{
    width: 100%;
    height: 100%;
  }
</style>
