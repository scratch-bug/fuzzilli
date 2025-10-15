const v0 = [-65536,1073741824,512,12];
function f2(a3) {
    function f4() {
        function f5() {
            return {};
        }
        return { next: f5 };
    }
    const v8 = Symbol.iterator;
    const v9 = { [v8]: f4 };
    a3.bind(null, ...v9);
    return v9;
}
const v14 = { type: "function" };
Object.defineProperty(v14, "arguments", { writable: true, enumerable: true, value: v0 });
new Worker(f2, v14);
for (let i17 = 0;
    (() => {
        let v18 = 20000;
        v18--;
        return i17 < v18;
    })();
    i17++) {
}
