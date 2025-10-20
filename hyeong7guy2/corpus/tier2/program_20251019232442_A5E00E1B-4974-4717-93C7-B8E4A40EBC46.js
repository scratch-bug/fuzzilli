const v1 = [-1.0,-4.0];
const v2 = { done: 3 };
Object.defineProperty(v2, "toJSON", { enumerable: true, value: v1 });
const v4 = JSON.stringify(v2);
const v5 = JSON.parse;
const v6 = [v4,v5];
try { v5.apply(JSON, v6); } catch (e) {}
