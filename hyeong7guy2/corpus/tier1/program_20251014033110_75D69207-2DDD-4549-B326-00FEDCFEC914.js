function f2() {
    BigInt64Array[0] = 1.1;
    return {};
}
const v5 = { construct: f2 };
function f7() {
}
const v8 = new Proxy(f7, v5);
v8();
BigInt64Array[0];
const v13 = class {
}
for (let v14 = 0; v14 < 100; v14++) {
    try { WebAssembly.Exception(); } catch (e) {}
    const v18 = Math.asinh(v14);
    v18 & v18;
    const v20 = class {
        static [v13] = WebAssembly;
    }
}
