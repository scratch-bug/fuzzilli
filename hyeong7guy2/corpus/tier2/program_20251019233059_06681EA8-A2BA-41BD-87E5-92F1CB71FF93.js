const v0 = [-65536,1073741824,512,12];
function f2(a3) {
    function f4() {
        function f5() {
            for (let v6 = 0; v6 < 10; v6++) {
                gc({ execution: "async" });
            }
        }
        return { next: f5 };
    }
    const v12 = Symbol.iterator;
    a3.bind(null, ...{ [v12]: f4 });
    return f2;
}
const v18 = { type: "function" };
Object.defineProperty(v18, "arguments", { writable: true, enumerable: true, value: v0 });
const v19 = new Worker(f2, v18);
function f20(a21) {
    return v19;
}
new Worker(f20, { type: "function" });
