const v0 = [512,9007199254740991,63841,268435441,-373334214,65536,1432145695,536870889,-1024,268435441];
const v1 = {};
const v3 = new Proxy(v0, v1);
function f4() {
    return v1;
}
function f5() {
    function f6(a7) {
        return a7;
    }
    const v10 = [v3];
    new Worker(f6, { arguments: v10, type: "function" });
    function f13() {
        return { done: true };
    }
    return { next: f13 };
}
const v18 = Symbol.iterator;
f4.bind(null, ...{ [v18]: f5 });
