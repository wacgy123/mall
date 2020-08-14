<template>
  <div class="base-info" v-if="Object.keys(middleInfo).length!==0">
    <div class="info-title">{{middleInfo.title}}</div>
    <div class="info-price">
      <span class="now-price price">{{middleInfo.nowPrice}}</span>
      <span class="old-price price">{{middleInfo.oldPrice}}</span>
      <span class="price-tags" v-for="(tags,index) in middleInfo.priceTags" :key="index">
        <span class="price-tag">{{tags.text}}</span>
      </span>
    </div>
    <div class="info-other">
      <span v-for="(columns,index) in middleInfo.columns" :key="index">
        {{columns.desc}}
      </span>
    </div>
    <div class="info-service">
        <span class="info-service-item" v-for="(item,index) in services" :key="index">
          <img :src="item.icon" alt="">
          <span>{{item.name}}</span>
        </span>
    </div>

  </div>
  <div v-else>
    {{"当前没有数据,请检查网络"}}
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      middleInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      services() {
        return this.middleInfo.services.length > 3 ? this.middleInfo.services.slice(0, 3) : this.middleInfo.services
      }
    }
  }
</script>

<style scoped>
  .base-info{
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-title{
    color: #222;
  }
  .info-price{
    margin-top: 10px;
  }
  .info-price .now-price{
    font-size: 24px;
    color: var(--color-high-text);
  }
  .info-price .old-price{
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }
  .info-price .price-tag{
    font-size: 12px;
    padding: 2px 5px;
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 8px;
    margin-left: 5px;
    /*让元素上浮一些，使用相对定位即可*/
    position: relative;
    top: -8px;
  }
  .info-other{
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid rgba(100,100,100,.1);
    justify-content: space-between;
  }
  .info-service{
    display: flex;
    justify-content: space-between;
    line-height: 40px;
  }
  .info-service-item img{
    width: 12px;
    height: 12px;
    position: relative;
    top: 2px;
    margin-right: 3px;
  }
  .info-service-item span{
    font-size: 13px;
    color: #333;
    vertical-align: middle;
  }
  .price:before {
    content: "￥";
  }

</style>
