function f2() {
    return "🙌🏿";
}
Object.defineProperty(BigInt64Array, "toString", { configurable: true, enumerable: true, value: f2 });
const v4 = new BigInt64Array(97);
v4.join(BigInt64Array);
try {
    class C6 {
    }
    const v8 = {};
    function f9(a10) {
        return f9;
    }
    v8.get = f9;
    const v11 = new Proxy(C6, v8);
    Reflect.construct(C6, v8, v11);
} catch(e14) {
}
