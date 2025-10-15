function f1() {
    return 2.220446049250313e-16;
}
BigInt64Array[Symbol.toPrimitive] = f1;
const v6 = new BigInt64Array(97);
const v7 = v6.join(BigInt64Array);
v7.padEnd(v7);
