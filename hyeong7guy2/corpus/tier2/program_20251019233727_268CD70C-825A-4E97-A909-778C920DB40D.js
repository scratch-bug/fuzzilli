function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = class {
}
for (let i5 = 0, i6 = v3; i6; i6--) {
}
for (let i14 = 0, i15 = 10; i15;) {
    i15--;
}
const v21 = [v2,v2,v2];
function F22(a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    eval(a25);
    function f28() {
        function f29(a30) {
            try { v21.forEach(); } catch (e) {}
            new Proxy(v2, {});
        }
        f29();
        f29(f29);
        %OptimizeMaglevOnNextCall(f29);
        return f29;
    }
    Object.defineProperty(this, "toString", { get: f28 });
}
const v37 = new F22();
class C38 {
    static [v37](a40, a41, a42) {
    }
}
