class C0 {
}
let v1;
try { v1 = C0.bind(C0, C0, C0, C0); } catch (e) {}
function f2(a3, a4) {
    const v5 = a3.cos(a3, f2, f2);
    v5 >>> a4;
    try {
        f2(v5, f2);
    } catch(e8) {
    }
    arguments[1] = v1;
    return a4;
}
f2(Math);
%OptimizeMaglevOnNextCall(f2);
try { f2(f2, Math); } catch (e) {}
