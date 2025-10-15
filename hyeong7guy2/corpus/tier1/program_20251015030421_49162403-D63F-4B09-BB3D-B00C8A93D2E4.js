const v0 = [-65536,1073741824,512,12];
function f2(a3) {
    function f4() {
        function f5() {
            for (let v6 = 0; v6 < 5; v6++) {
                async function f7() {
                    await v6;
                }
                f7();
                function F10(a12, a13, a14, a15) {
                    if (!new.target) { throw 'must be called with new'; }
                    gc();
                }
                new F10();
            }
        }
        return { next: f5 };
    }
    const v20 = Symbol.iterator;
    a3.bind(null, ...{ [v20]: f4 });
}
const v26 = { type: "function" };
Object.defineProperty(v26, "arguments", { writable: true, enumerable: true, value: v0 });
new Worker(f2, v26);
for (let i29 = 0; i29 < 20000; i29++) {
}
