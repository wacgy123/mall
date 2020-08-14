<template>
  <div class="shop-info" v-if="Object.keys(shopInfo).length!==0">
    <div class="shop-top">
      <div class="shop-top-left">
        <img :src="shopInfo.logo" alt="">
      </div>
      <div class="shop-top-right">
        <i class="shop-entry">
          <div class="shop-entry-text">进店</div>
          <div class="right-arrow"></div>
        </i>
        <div class="shop-name">{{shopInfo.name}}</div>
        <div class="shop-level">
          <img src="~assets/img/common/star.png" alt="" v-for="level in shopInfo.level" :key="level">
        </div>
        <div class="shop-label">
          <div class="shop-label-item" v-for="label in showLabel" :key="label.id">{{label.text}}</div>
        </div>
      </div>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="sells-info">
          <div class="sells-count">
            {{shopInfo.sells}}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="goods-info">
          <div class="goods-count">
            {{shopInfo.goodsCount}}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item,index) in shopInfo.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more':item.isBetter}">
              <span>{{item.isBetter?'高':'低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shopInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      showLabel() {
        return this.shopInfo.labels.length > 3 ? this.shopInfo.labels.slice(0, 3) : this.shopInfo.labels
      }
    }
  }
</script>

<style scoped>
  .shop-info {
    padding: 20px 8px;
    border-bottom: 5px solid #f2f5f8;
  }

  .shop-top {
    display: flex;
  }

  .shop-top-left {
    width: 51px;
    height: 51px;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    overflow: hidden;
  }

  .shop-top-left img {
    width: 100%;
    height: auto;
    display: inherit;
    visibility: inherit;
    border-radius: 2px;
  }

  .shop-top-right {
    margin-left: 10px;
    position: relative;
    display: flex;
    flex: 1;
    flex-flow: column nowrap;
    justify-content: space-around;
  }

  .shop-top-right .shop-entry {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    align-items: center;
    padding-right: 10px;
  }

  .shop-top-right .shop-entry-text {
    font-size: 13px;
  }

  .right-arrow {
    height: 8px;
    width: 8px;
    border-width: 1.5px 1.5px 0 0;
    border-color: #999;
    border-style: solid;
    transform: rotate(45deg);
    position: relative;
  }

  .shop-top-right .shop-name {
    color: #333;
    width: 100%;
    font-size: 14px;
  }

  .shop-top-right .shop-level {
    display: flex;
    flex: 1;
    align-items: center;
  }

  .shop-top-right .shop-level img {
    width: 14px;
    height: auto;
    margin-right: 3px;
    vertical-align: middle;
  }

  .shop-top-right .shop-label {
    display: flex;
    width: 100%;
  }

  .shop-top-right .shop-label .shop-label-item {
    display: inline-block;
    height: 8px;
    padding: 2px 4px;
    line-height: 10px;
    font-size: 10px;
    color: var(--color-high-text);
    border: 1px solid #d6d6d6;
    border-radius: 30px;
    margin-right: 5px;
  }

  .shop-middle {
    margin-top: 15px;
    display: flex;
    align-items: center;
  }

  .shop-middle-item {
    flex: 1;
  }

  .shop-middle-left {
    display: flex;
    justify-content: space-evenly;
    color: #333;
    text-align: center;
    border-right: 1px solid rgba(0, 0, 0, .1);
  }

  .sells-count, .goods-count {
    font-size: 18px;
  }

  .sells-text, .goods-text {
    margin-top: 10px;
    font-size: 12px;
  }

  .shop-middle-right {
    font-size: 13px;
    color: #333;
  }

  .shop-middle-right table {
    width: 120px;
    margin-left: 30px;
  }

  .shop-middle-right table td {
    padding: 5px 0;
  }

  .shop-middle-right .score {
    color: #5ea732;
  }

  .shop-middle-right .score-better {
    color: #f13e3a;
  }

  .shop-middle-right .better span {
    background-color: #5ea732;
    color: #fff;
    text-align: center;
  }

  .shop-middle-right .better-more span {
    background-color: #f13e3a;
  }
</style>
