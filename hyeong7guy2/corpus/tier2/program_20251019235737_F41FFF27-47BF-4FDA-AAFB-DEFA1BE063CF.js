const v0 = [512,9007199254740991,63841,268435441,-373334214,65536,1432145695,536870889,-1024,268435441];
const v1 = {};
function f2(a3, a4) {
    return a3;
}
Object.defineProperty(v1, "get", { configurable: true, enumerable: true, value: f2 });
const v6 = new Proxy(v0, v1);
function f7() {
    return f7;
}
function f8() {
    function f9(a10) {
        return v6;
    }
    const v13 = [v6];
    new Worker(f9, { arguments: v13, type: "function" });
    function f16() {
        return { done: true };
    }
    return { next: f16 };
}
const v21 = Symbol.iterator;
f7.bind(null, ...{ [v21]: f8 });
