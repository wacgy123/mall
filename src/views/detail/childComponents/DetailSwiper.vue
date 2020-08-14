<template>
  <swiper :options="swiperOptions">
    <swiper-slide v-for="(item,index) in topImages" :key="index">
      <div class="swiper-item">
        <img class="swiper-img" :src="item" alt="">
      </div>
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
    name: "DetailSwiper",
    components: {Swiper, SwiperSlide},
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        swiperOptions: {
          //显示小点
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          slidesPerView: "auto",
          centeredSlides: true,
          centeredSlidesBounds: true,
          spaceBetween: 10,
          //循环
          loop: false,
          //滑动速度
          speed: 1000,
        }
      }
    },
    updated() {
      //当只有一张图片默认居中
      if (this.topImages.length === 1) {
        this.$el.swiper.params.slidesOffsetBefore = (this.$el.offsetWidth - this.$el.swiper.slides[0].clientWidth - 20) / 2;
        this.$el.swiper.update()
      }
    }
  }
</script>

<style scoped>
  /*样式参考https://blog.csdn.net/weixin_43746444/article/details/104063039*/
  .swiper-item {
    margin-top: 8px;
  }

  .swiper-container {
    --swiper-pagination-color: var(--color-high-text);
  }

  .swiper-container img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .1);
  }

  .swiper-slide {
    width: 60%;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    transition: 300ms;
  }

  .swiper-slide:first-child {
    margin-left: 10px;
  }

  .swiper-slide:last-child {
    margin-right: 10px;
  }

  .swiper-container >>> .swiper-pagination-bullet {
    outline: none;
    cursor: none;
  }
</style>
