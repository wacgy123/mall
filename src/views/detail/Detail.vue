<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"/>
    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :middleInfo="middleInfo"/>
      <detail-shop-info :shopInfo="shopInfo"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info :param-info="paramInfo"/>
    </scroll>
  </div>
</template>

<script>
  import DetailNavBar from "./childComponents/DetailNavBar";
  import DetailSwiper from "./childComponents/DetailSwiper";
  import DetailBaseInfo from "./childComponents/DetailBaseInfo";
  import DetailShopInfo from "./childComponents/DetailShopInfo";
  import DetailGoodsInfo from "./childComponents/DetailGoodsInfo";
  import DetailParamInfo from "./childComponents/DetailParamInfo";

  import Scroll from "components/common/scroll/Scroll";

  import {getGoodsDetail,MiddleInfo,ShopInfo} from "network/detail"

  export default {
    name: "Detail",
    components: {DetailNavBar,DetailSwiper,DetailBaseInfo,DetailShopInfo,DetailGoodsInfo,DetailParamInfo,Scroll},
    data(){
      return{
        tradeItemId:null,
        topImages:[],
        middleInfo:{},
        shopInfo:{},
        detailInfo:{},
        paramInfo:{}
      }
    },
    methods:{
      imageLoad(){
        this.$refs.scroll.refresh()
      }
    },
    created(){
      //保存传入的商品id
      this.tradeItemId=this.$route.params.tradeItemId
      //根据商品id请求商品详情数据
      getGoodsDetail(this.tradeItemId).then(res=>{
        const result=res.result
        //获取顶部图片轮播数据
        this.topImages=result.topImages
        //获取中间商品信息
        this.middleInfo=new MiddleInfo(result.itemInfo,result.priceInfo,result.itemServices)
        //获取店铺信息
        this.shopInfo=new ShopInfo(result.shopInfo)
        //获取商品详情信息
        this.detailInfo=result.detailInfo
        //获取商品参数信息
        this.paramInfo=result.itemParams.info
      })
    }
  }
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .detail-nav{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .content{
    height: calc(100% - 44px);
  }
</style>
