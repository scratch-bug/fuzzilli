const v2 = new BigInt64Array(1);
Float64Array[1] = v2;
const v4 = Float64Array[1];
v4.reverse(Float64Array, Float64Array, v2, v4);
