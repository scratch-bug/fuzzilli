const v0 = [536870887,-11,-17117,-4294967295,1073741825];
const v1 = {};
Object.defineProperty(v1, "toJSON", { enumerable: true, value: v0 });
const v3 = JSON.stringify(v1);
const v4 = JSON.parse;
const v5 = [v3,v4];
try { v4.apply(JSON, v5); } catch (e) {}
