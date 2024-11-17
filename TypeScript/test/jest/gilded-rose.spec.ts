import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {
  it("should foo", () => {
    const gildedRose = new GildedRose([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });
  it("should assert items data", () => {
    const gildedRose = new GildedRose();
    const items = gildedRose.updateQuality();
    expect(items.length).toEqual(0);
  });

  describe("other item", () => {
    it("should quality minus 1 when item name is other and quality is greater than 0 and sellIn is greater than 0", () => {
      const gildedRose = new GildedRose([new Item("other", 2, 5)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(4);
    });

    it("should quality minus 1 when item name is other and quality is greater than 0 and sellIn is lower than 0", () => {
      const gildedRose = new GildedRose([new Item("other", 0, 5)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(3);
    });

    it("should not lower than 0 when item quality is 0", () => {
      const gildedRose = new GildedRose([new Item("other", 0, 0)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(0);
    });

    it("should change quality of other when sellIn is greater than 0", () => {
      const gildedRose = new GildedRose([new Item("other", 1, 50)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(49);
    });

    it("should change quality 2 of other when sellIn is lower than 0", () => {
      const gildedRose = new GildedRose([new Item("other", -1, 50)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(48);
    });
  });

  describe("Backstage", () => {
    it('should change quality 1 of "Backstage passes to a TAFKAL80ETC concert" when sellIn is greater than 10', () => {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 15, 40),
      ]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(41);
    });

    it('should change quality 2 of "Backstage passes to a TAFKAL80ETC concert" when sellIn is lower than 10', () => {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 10, 40),
      ]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(42);
    });

    it('should change quality 3 of "Backstage passes to a TAFKAL80ETC concert" when sellIn is lower than 5', () => {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 3, 40),
      ]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(43);
    });

    it('should change quality to 50 of "Backstage passes to a TAFKAL80ETC concert" when sellIn is lower than 5 and quality is 48', () => {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 3, 48),
      ]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(50);
    });

    it('should change quality to 0 of "Backstage passes to a TAFKAL80ETC concert" when sellIn is lower than 0', () => {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 0, 48),
      ]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(0);
    });
  });

  describe("Sulfuras", () => {
    it('should have quality is 80 when name is "Sulfuras"', () => {
      const gildedRose = new GildedRose([
        new Item("Sulfuras, Hand of Ragnaros", 0, 100),
      ]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(80);
    });
    it("should not change quality of Sulfuras when quality > 0", () => {
      const gildedRose = new GildedRose([
        new Item("Sulfuras, Hand of Ragnaros", 1, 50),
      ]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(80);
    });

    it("should not change quality of Sulfuras when quality equal 0", () => {
      const gildedRose = new GildedRose([
        new Item("Sulfuras, Hand of Ragnaros", 1, 0),
      ]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(80);
    });
  });

  describe("Conjured", () => {
    it('should decrease double when name is "Conjured"', () => {
      const gildedRose = new GildedRose([new Item("Conjured", 2, 50)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(48);
    });

    it('should decrease double when name is "Conjured" and sellIn is lower than 0', () => {
      const gildedRose = new GildedRose([new Item("Conjured", -1, 50)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(46);
    });

    it('should decrease double when name is "Conjured" and sellIn is lower than 0 and quality is lower than 2', () => {
      const gildedRose = new GildedRose([new Item("Conjured", -1, 1)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(0);
    });
  });

  describe("Aged Brie", () => {
    it('should quality is 50 when name is "Aged Brie" and sellIn is lower than 0 and quality is 49', () => {
      const gildedRose = new GildedRose([new Item("Aged Brie", -1, 49)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(50);
    });

    it("should increase quality of aged Brie when sellIn is lower than 0 and quality is less than 50", () => {
      const gildedRose = new GildedRose([new Item("Aged Brie", -1, 45)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(47);
    });
  });
});
