function f0(a1) {
}
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v8 = 0; v8 < 250; v8++) {
        for (let v9 = 0; v9 < 50; v9++) {
        }
        const v10 = class {
        }
        v10[Symbol.toPrimitive] = f0;
        try { WebAssembly.Exception(a6, WebAssembly, v10, F3, v10); } catch (e) {}
        const v14 = class {
            static [v10] = WebAssembly;
        }
        function f15() {
        }
        const v16 = {};
    }
}
new F3(f0, F3, F3);
