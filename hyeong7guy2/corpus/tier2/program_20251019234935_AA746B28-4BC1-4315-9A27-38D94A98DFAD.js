function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                gc();
            }
            const v16 = new F10(a6, a6);
            return v16;
        }
        f7();
        f7(a5, F0);
        function f20() {
            return a5;
        }
        WebAssembly.compileStreaming(this, a5).catch(f20);
        ("a").replaceAll(/17(?!(a))\1xyz{1,32}?VfXB((\xed\xa0\x80))\x02a\b!/usg);
    }
}
new v3(v3, v3);
