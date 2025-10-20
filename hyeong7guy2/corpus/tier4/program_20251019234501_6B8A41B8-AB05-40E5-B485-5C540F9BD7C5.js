const v1 = {};
const v2 = { 5: 5 };
Object.freeze(v2);
Object.assign(v1, v2);
