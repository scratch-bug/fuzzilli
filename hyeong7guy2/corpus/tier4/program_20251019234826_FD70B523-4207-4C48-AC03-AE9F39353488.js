const v1 = Array.prototype;
const v2 = v1.push;
v2.call(v1, v2);
v1.fill();
