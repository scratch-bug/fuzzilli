function f2() {
    return "X";
}
Object.defineProperty(BigInt64Array, "toString", { configurable: true, enumerable: true, value: f2 });
const v4 = new BigInt64Array(97);
const v5 = v4.join(BigInt64Array);
v5.padEnd(v5);
