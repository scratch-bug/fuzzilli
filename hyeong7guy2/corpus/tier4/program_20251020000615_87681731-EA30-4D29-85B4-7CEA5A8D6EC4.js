const v0 = class {
}
function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F1(v0, F1, F1, F1);
class C8 extends F1 {
    #valueOf(a10, a11) {
    }
    constructor(a13, a14, a15, a16) {
        function F19(a21, a22, a23) {
            if (!new.target) { throw 'must be called with new'; }
        }
        for (let i25 = 0;
            (() => {
                const v27 = {};
                v27.g = -47530n;
                v27.b = -47530n;
                const v28 = i25 < 20000;
                F19[i25] <<= 64;
                return v28;
            })();
            i25++) {
        }
        super(a13, a16, v7, v0);
    }
}
new C8(v7, F1, v7, v0);
