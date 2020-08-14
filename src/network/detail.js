import {request} from "./request";

export function getGoodsDetail(iid) {
  return request({
    url: "/detail",
    params: {
      iid
    }
  })
}

export class MiddleInfo {
  constructor(itemInfo,priceInfo,itemServices) {
    this.title=itemInfo.title
    this.nowPrice=priceInfo.nowPrice
    this.oldPrice=priceInfo.oldPrice
    this.priceTags=priceInfo.priceTags
    this.columns=itemServices.columns
    this.services=itemServices.services
  }
}

export class ShopInfo {
  constructor(shopInfo) {
    this.logo=shopInfo.shopLogo
    this.name=shopInfo.name
    this.level=shopInfo.level
    this.fans=shopInfo.cFans
    this.goodsCount=shopInfo.cGoods
    this.sells=shopInfo.cSells
    this.score=shopInfo.score
    this.labels=shopInfo.shopLabels
  }
}
