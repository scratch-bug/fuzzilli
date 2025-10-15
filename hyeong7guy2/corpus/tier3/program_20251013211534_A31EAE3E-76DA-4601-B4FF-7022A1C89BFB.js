const v1 = class extends Date {
    valueOf(a3, a4) {
        this.e *= a4;
    }
}
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
    const v13 = this.constructor;
    try { new v13(); } catch (e) {}
}
new F10();
const v16 = class {
}
const v17 = v16.__lookupGetter__;
try { new v17(); } catch (e) {}
function f21(a22, a23) {
    function* f24(a25, a26, a27) {
        return yield 4010;
    }
    return a22;
}
