const v1 = [-65536,1073741824,512,12];
function f2(a3) {
    function f4() {
        function F5(a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            function f9(a10) {
                function f13() {
                    return a7;
                }
                WebAssembly.instantiateStreaming().catch(f13);
                const v16 = new ArrayBuffer();
                Object.defineProperty(DataView, Symbol.toPrimitive, { value: f9 });
                const v19 = new DataView(v16, DataView);
                return v19;
            }
            f9();
        }
        new F5(F5, f4);
    }
    const v22 = Symbol.iterator;
    return a3.bind(null, ...{ [v22]: f4 });
}
const v28 = { type: "function" };
Object.defineProperty(v28, "arguments", { writable: true, enumerable: true, value: v1 });
new Worker(f2, v28);
for (let i31 = 0;
    (() => {
        let v32 = 20000;
        v32--;
        return i31 < v32;
    })();
    i31++) {
}
