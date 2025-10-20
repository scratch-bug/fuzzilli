function f2() {
    return -1.7976931348623157e+308;
}
BigInt64Array[Symbol.toPrimitive] = f2;
const v6 = new BigInt64Array(3662);
const v7 = v6.join(BigInt64Array);
try { v7.match(v7); } catch (e) {}
