const v2 = Array(157);
const v3 = {};
Object.defineProperty(v3, "toJSON", { enumerable: true, value: v2 });
const v5 = JSON.stringify(v3);
const v6 = JSON.parse;
const v7 = [v5,v6];
try { v6.apply(JSON, v7); } catch (e) {}
