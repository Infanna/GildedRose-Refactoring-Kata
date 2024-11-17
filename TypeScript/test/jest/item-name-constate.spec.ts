import { ItemNameConstants } from "@/item-name-constant";

describe("constate", () => {
  it("should equal Aged Brie", () => {
    expect(ItemNameConstants.AgedBrie).toBe("Aged Brie");
  });

  it("should equal Backstage Passes", () => {
    expect(ItemNameConstants.BackstagePasses).toBe(
      "Backstage passes to a TAFKAL80ETC concert"
    );
  });

  it("should equal Sulfuras", () => {
    expect(ItemNameConstants.Sulfuras).toBe(
      "Sulfuras, Hand of Ragnaros"
    );
  });

  it("should equal Conjured", () => {
    expect(ItemNameConstants.Conjured).toBe("Conjured");
  });
});
