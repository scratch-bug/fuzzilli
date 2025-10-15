function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
    }
    Symbol.b = F4;
    for (const v10 in Symbol) {
    }
}
class C12 extends Uint32Array {
    constructor(a14, a15) {
        super();
        for (let i19 = 0;
            i19 < 10000;
            (() => {
                const v23 = new F0();
                const v24 = { 1900717726: v23 };
                ++i19;
                Date.b ^= 1073741824;
            })()) {
        }
    }
}
new C12(Uint32Array, C12);
