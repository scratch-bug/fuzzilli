function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
const v6 = [-65536,1073741824,512,12];
function f7(a8) {
    function f9() {
        function F10(a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function f14(a15) {
                function f18() {
                }
                WebAssembly.instantiateStreaming().catch(f18);
                const v21 = new ArrayBuffer();
                Object.defineProperty(DataView, Symbol.toPrimitive, { value: f14 });
                new DataView(v21, DataView);
            }
            f14();
        }
        new F10();
    }
    const v27 = Symbol.iterator;
    a8.bind(null, ...{ [v27]: f9 });
}
const v33 = { type: "function" };
Object.defineProperty(v33, "arguments", { writable: true, enumerable: true, value: v6 });
new Worker(f7, v33);
for (let i36 = 0; i36 < 20000; i36++) {
}
