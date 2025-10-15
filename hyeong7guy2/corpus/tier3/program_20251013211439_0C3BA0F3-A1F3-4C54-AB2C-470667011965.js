let v0 = -271248144;
const v2 = class {
    static {
        v0 = 14950;
    }
}
const v4 = v2.constructor;
try { v4(v2); } catch (e) {}
const v8 = [0.3707006462528598];
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    const v15 = a11.forEach;
    try { v15(a11, a13, a13, v4); } catch (e) {}
}
let v17;
try { v17 = F9(); } catch (e) {}
const v18 = new F9(v8);
Uint16Array.d = Uint16Array;
function f23() {
    const v24 = new Uint32Array(v18, v0, 127);
    v24.copyWithin(v17, F9);
    return v2;
}
Int32Array.constructor = f23;
const v26 = Int32Array.constructor;
v26.caller = v26;
v26();
