function f2() {
    return "🙌🏿";
}
Object.defineProperty(BigInt64Array, "toString", { configurable: true, enumerable: true, value: f2 });
const v4 = new BigInt64Array(22535);
v4.join(BigInt64Array).localeCompare();
