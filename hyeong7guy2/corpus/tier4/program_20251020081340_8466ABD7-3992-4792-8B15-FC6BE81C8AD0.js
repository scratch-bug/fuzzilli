function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F0(F0);
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = class extends F4 {
    constructor(a9, a10) {
        super();
        function f12() {
            return a10;
        }
        WebAssembly.compileStreaming(this, a9).catch(f12);
        function F15(a17) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v18 = [v3,F15];
        function f19(a20, a21, a22, a23) {
            return F4;
        }
        try { JSON.parse(v18, f19); } catch (e) {}
        ("🙌🏿")[2];
    }
}
new v7(v7, F4);
