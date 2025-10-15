const v0 = [-65536,1073741824,512,12];
function f2(a3) {
    function f4() {
        function f5() {
            for (let v6 = 0; v6 < 10; v6++) {
                eval();
            }
            return a3;
        }
        return { next: f5 };
    }
    const v10 = Symbol.iterator;
    a3.bind(null, ...{ [v10]: f4 });
    return v10;
}
const v16 = { type: "function" };
Object.defineProperty(v16, "arguments", { writable: true, enumerable: true, value: v0 });
new Worker(f2, v16);
function f18(a19) {
    return f2;
}
new Worker(f18, { type: "function" });
