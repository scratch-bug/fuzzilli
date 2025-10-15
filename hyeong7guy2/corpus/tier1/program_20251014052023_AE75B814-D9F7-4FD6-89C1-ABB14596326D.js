function f1() {
}
const v2 = class extends f1 {
}
const v3 = [-65536,1073741824,512,12];
function f5(a6) {
    function f7() {
        function f8() {
            return Uint8ClampedArray;
        }
        return { next: f8 };
    }
    const v11 = Symbol.iterator;
    ~3.251563067304469e+307;
    a6.bind(null, ...{ [v11]: f7 });
    eval();
}
const v22 = { type: "function" };
Object.defineProperty(v22, "arguments", { writable: true, enumerable: true, value: v3 });
new Worker(f5, v22);
for (let i25 = 0; i25 < 20000; i25++) {
}
