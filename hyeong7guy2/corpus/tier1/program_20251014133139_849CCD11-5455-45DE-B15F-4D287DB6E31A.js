function f0() {
}
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a4;
}
const v5 = new F2(f0);
v5.g();
([147.439016369485,-1000000000000.0,1.6461636684660984e+308,-7.6629924547838435,-2.964559497541126]).copyWithin(F2, -0.0);
let v9 = -2n;
v9--;
const v11 = class extends F2 {
}
const v12 = new v11();
function f14(a15, a16) {
    a16 ?? a16;
    class C18 {
    }
    function f19(a20, a21) {
        try { a20(f19); } catch (e) {}
        a21(v12);
    }
    C18.then = f19;
    for (let v24 = 0; v24 < 50; v24++) {
        const v25 = {};
        v25.c = v25;
        const v27 = Symbol(a15);
        v27.description;
        const v30 = {
            [v27]() {
            },
        };
    }
    return C18;
}
f14();
new Uint8ClampedArray(268435441);
