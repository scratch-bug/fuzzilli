const v0 = class {
}
class C1 extends v0 {
}
const v3 = [10,10,v0,C1];
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = class extends F4 {
    constructor(a9, a10) {
        super();
        const v13 = new Float32Array(127);
        v13.set(v3);
        v13.toSorted(a10);
        function f17() {
            return F4;
        }
        WebAssembly.compileStreaming(v13, a9).catch(f17);
    }
}
new v7();
