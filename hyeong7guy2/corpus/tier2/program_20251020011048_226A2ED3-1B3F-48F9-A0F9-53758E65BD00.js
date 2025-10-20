function f3() {
    return "🙌🏿";
}
Object.defineProperty(BigInt64Array, "toString", { configurable: true, enumerable: true, value: f3 });
const v5 = new BigInt64Array(4);
("number").search(v5.join(BigInt64Array));
