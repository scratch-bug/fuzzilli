let v1;
try { v1 = Map(); } catch (e) {}
function F2() {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F2();
const v5 = class {
}
for (let i7 = 0, i8 = v5; i8; i8--) {
}
for (let i16 = 0, i17 = 10; i17;) {
    i17--;
}
const v23 = [v5,v5,v5,v5];
function F24(a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    eval(a26);
    function f30() {
        function f31(a32) {
            try { v23.forEach(); } catch (e) {}
            const v34 = {};
            v1 >= a26;
            new Proxy(v4, v34);
        }
        f31(f31);
        f31(a27);
        %OptimizeMaglevOnNextCall(f31);
        return f31;
    }
    Object.defineProperty(this, "toString", { get: f30 });
}
const v40 = new F24();
class C41 {
    static [v40](a43, a44, a45) {
    }
}
