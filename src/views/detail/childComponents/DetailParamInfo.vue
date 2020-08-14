<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length!==0">
    <span class="info-key">{{paramInfo.key}}</span>
    <table class="info-param">
      <tr v-for="(value,key,index) in paramInfo.set" :key="index">
        <td class="param-key">{{key}}</td>
        <td class="param-value">{{value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="this.paramInfo.image&&this.paramInfo.image.length!==0">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailParamInfo",
    props: {
      paramInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .param-info {
    padding: 20px 15px;
    font-size: 12px;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-key{
    font-size: 16px;
    font-style: italic;
    color: #333;
  }
  .param-info table {
    width: 100%;
    border-collapse: collapse;
  }

  .param-info table tr {
    height: 35px;
  }

  .param-info table tr td {
    border-bottom: 1px solid rgba(100, 100, 100, .1);
  }

  .param-key {
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 120px;
  }

  .info-param {
    margin-top: 10px;
    border-top: 1px solid rgba(0, 0, 0, .1);
  }

  .param-value {
    color: #eb4868
  }

  .info-img img {
    width: 100%;
  }
</style>
