function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        const v11 = {
            [a3](a7, a8, a9, a10) {
            },
        };
        const t7 = JSON.stringify;
        t7(v11);
        for (let i17 = 0, i18 = 10; i18; i18--) {
        }
        function f24(a25) {
            return a25;
        }
        return f24;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v26 = new F1(F1);
class C27 extends Map {
    static [v26](a29, a30, a31) {
    }
}
function f33() {
    return Map;
}
WebAssembly.compileStreaming().catch(f33);
