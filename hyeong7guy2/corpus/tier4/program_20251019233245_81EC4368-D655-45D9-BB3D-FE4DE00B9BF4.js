const v2 = [256,-2147483648,8,2,-2371];
const v3 = new Float32Array(127);
v3.set(v2);
v3[3] = v3;
v3.toSorted();
