const v0 = [-65536,1073741824,512,12];
function f2(a3) {
    function f4() {
        function f5() {
            return Uint8ClampedArray;
        }
        return { next: f5 };
    }
    const v8 = Symbol.iterator;
    a3.bind(null, ...{ [v8]: f4 });
    eval(a3);
    return eval;
}
const v16 = { type: "function" };
Object.defineProperty(v16, "arguments", { writable: true, enumerable: true, value: v0 });
new Worker(f2, v16);
function f18(a19) {
    return Symbol;
}
new Worker(f18, { type: "function" });
