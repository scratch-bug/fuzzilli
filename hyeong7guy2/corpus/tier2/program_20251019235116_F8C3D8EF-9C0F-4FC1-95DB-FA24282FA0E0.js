const v1 = [13,1440059959,-3,-1169515816];
function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
}
class C8 {
}
class C9 extends C8 {
}
const v10 = new C9();
function f11(a12, a13, a14) {
    function F15(a17, a18) {
        if (!new.target) { throw 'must be called with new'; }
        function f19() {
            function f20(a21) {
                const v22 = a21?.constructor;
                let v23;
                try { v23 = new v22(); } catch (e) {}
                v23?.constructor;
            }
            return f20;
        }
        Object.defineProperty(this, "toString", { get: f19 });
    }
    const v25 = new F15();
    const v26 = v25.toString;
    v26(a12);
    v26(v10);
    return f11;
}
const v29 = f11.constructor;
let v30;
try { v30 = v29(v1, 2020); } catch (e) {}
const v31 = f11(v30, C9, F2);
v31(F2);
%OptimizeMaglevOnNextCall(f11);
f11(v10, v31, v31);
