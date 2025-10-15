let v0 = class {
}
class C1 {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i7 = 0; i7 < 65535; i7++) {
    const v13 = {};
    v0 = F2;
    function f14(a15, a16) {
        with (C1) {
        }
        return v13;
    }
    try { f14(); } catch (e) {}
    const v18 = {};
    function f19(a20) {
        v18.endsWith(a20, f19);
        return v13;
    }
}
