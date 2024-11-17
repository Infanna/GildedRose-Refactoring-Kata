import { ItemNameConstants } from "./item-name-constant";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  maxQuality = 50;
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      switch (this.items[i].name) {
        case ItemNameConstants.AgedBrie:
          this.agedBrieItem(this.items[i]);
          break;
        case ItemNameConstants.BackstagePasses:
          this.backstagePassesItem(this.items[i]);
          break;
        case ItemNameConstants.Sulfuras:
          this.sulfurasItem(this.items[i]);
          break;
        case ItemNameConstants.Conjured:
          this.conjuredPassesItem(this.items[i]);
          break;
        default:
          this.otherItem(this.items[i]);
      }
    }

    return this.items;
  }

  sulfurasItem(item: Item) {
    item.quality = 80;
  }

  agedBrieItem(item: Item) {
    if (item.quality < this.maxQuality) {
      item.quality += 1;
    }
    item.sellIn -= 1;
    if (item.sellIn < 0 && item.quality < this.maxQuality) {
      item.quality += 1;
    }
  }

  backstagePassesItem(item: Item) {
    if (item.quality < this.maxQuality) {
      item.quality += 1;
      if (item.sellIn < 11 && item.quality < this.maxQuality) {
        item.quality += 1;
      }
      if (item.sellIn < 6 && item.quality < this.maxQuality) {
        item.quality += 1;
      }
    }
    item.sellIn -= 1;
    if (item.sellIn < 0) {
      item.quality = 0;
    }
  }

  conjuredPassesItem(item: Item) {
    if (item.quality >= 2) {
      item.quality -= 2;
    } else {
      item.quality = 0;
    }
    item.sellIn -= 1;
    if (item.sellIn < 0) {
      if (item.quality >= 2) {
        item.quality -= 2;
      } else {
        item.quality = 0;
      }
    }
  }

  otherItem(item: Item) {
    if (item.quality > 0) {
      item.quality -= 1;
    }
    item.sellIn -= 1;
    if (item.sellIn < 0) {
      if (item.quality > 0) {
        item.quality -= 1;
      }
    }
  }
}
