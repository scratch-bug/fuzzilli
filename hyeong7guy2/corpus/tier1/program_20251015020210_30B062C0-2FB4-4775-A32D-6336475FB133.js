const v0 = [-65536,1073741824,512,12];
function f2(a3) {
    function f4() {
        function f5() {
            for (let v6 = 0; v6 < 5; v6++) {
                function F7(a9, a10, a11, a12) {
                    if (!new.target) { throw 'must be called with new'; }
                    gc();
                }
                new F7();
            }
        }
        return { next: f5 };
    }
    [257,8,884999005,-65537,1267384689];
    const v19 = Symbol.iterator;
    /z(?:ab)|cde/gs;
    a3.bind(null, ...{ [v19]: f4 });
}
const v27 = { type: "function" };
Object.defineProperty(v27, "arguments", { writable: true, enumerable: true, value: v0 });
new Worker(f2, v27);
for (let i30 = 0; i30 < 20000; i30++) {
}
