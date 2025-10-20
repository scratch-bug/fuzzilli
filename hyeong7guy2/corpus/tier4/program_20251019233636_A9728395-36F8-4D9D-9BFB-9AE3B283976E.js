const v2 = Array(11);
v2[10] = 11;
const v4 = Object.seal(v2);
v4.indexOf(v4[10], v4);
