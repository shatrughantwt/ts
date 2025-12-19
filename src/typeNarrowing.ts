// 1️⃣ Union type + typeof narrowing
function getWater(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} water...`;
  }
  return `Water order: ${kind}`;
}

// 2️⃣ Optional parameter
function serveWater(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving default mineral water`;
}

// 3️⃣ Literal union + number
function orderWater(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return `Small water bottle`;
  }
  if (size === "medium" || size === "large") {
    return `Making extra water`;
  }
  return `Water order ${size}`;
}

// 4️⃣ Classes + instanceof narrowing
class NormalWater {
  serve() {
    return `Serving normal water`;
  }
}

class NWater {
  serve() {
    return `Serving n water`;
  }
}

function serve(water: NormalWater | NWater) {
  if (water instanceof NormalWater) {
    return water.serve();
  }
  return water.serve();
}

// 5️⃣ Custom type guard
type WaterOrder = {
  type: string;
  sugar: number;
};

function isWaterOrder(obj: any): obj is WaterOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serveOrder(item: WaterOrder | string) {
  if (isWaterOrder(item)) {
    return `Serving ${item.type} water with ${item.sugar} sugar`;
  }
  return `Serving custom water: ${item}`;
}

// 6️⃣ Discriminated union
type MineralWater = { type: "mineral"; purityLevel: number };
type GingerWater = { type: "ginger"; amount: number };
type ElaichiWater = { type: "elaichi"; aroma: number };

type Water = MineralWater | GingerWater | ElaichiWater;

function makeWater(order: Water) {
  switch (order.type) {
    case "mineral":
      return `Mineral Water (Purity: ${order.purityLevel})`;
    case "ginger":
      return `Ginger Water (Amount: ${order.amount})`;
    case "elaichi":
      return `Elaichi Water (Aroma: ${order.aroma})`;
  }
}

// 7️⃣ "in" operator narrowing
function brew(order: MineralWater | GingerWater) {
  if ("purityLevel" in order) {
    return `Brewing mineral water`;
  }
  return `Brewing ginger water`;
}

// 8️⃣ Array type guard
function isStringArray(arr: unknown): arr is string[] {
  return (
    Array.isArray(arr) &&
    arr.every(item => typeof item === "string")
  );
}
