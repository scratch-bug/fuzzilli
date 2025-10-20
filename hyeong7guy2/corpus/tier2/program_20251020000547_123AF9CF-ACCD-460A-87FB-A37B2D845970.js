function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            for (let v11 = 0; v11 < 5; v11++) {
                parseInt(-11, v11);
            }
        }
        const v15 = new F7(F0, this);
        function f17() {
            return F7;
        }
        WebAssembly.compileStreaming(this, v15).catch(f17);
    }
}
new v3();
