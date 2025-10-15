const v1 = Array.prototype;
const v2 = v1.push;
v2.apply(v1, [Array,v2]);
