function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = [-886799.3532255791,-5.0,-133943.78511945962,-80.9159366568806,Infinity,0.0,1e-15,3.3068205033477778,-2.220446049250313e-16,-1.7976931348623157e+308];
function f7(a8) {
    const v10 = Intl.PluralRules;
    const v12 = {};
    v12.roundingIncrement = F0;
    new v10("tn", v12);
    return F0;
}
Object.defineProperty(v6, "valueOf", { writable: true, enumerable: true, value: f7 });
const v14 = class extends Uint32Array {
}
const v15 = new v14();
try { v15.subarray(v14, v6); } catch (e) {}
