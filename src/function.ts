function makeWater(type: string, cups: number) {
  console.log(`Making ${cups} cups of ${type}`);
}

makeWater("Honeywater", 3);

function getWaterPrice(): number {
  return 10;
}

function makeOrder(order: string) {
  if (!order) return null;
  return order;
}

function logWater(): void {
  console.log("Water is ready");
}

function orderWater(type?: string) {}

function wWater(type: string = "Honey") {}

function createWater(order: {
  type: string;
  sugar: number;
  size: "small" | "large";
}): number {
  return 4;
}
