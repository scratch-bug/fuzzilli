async function* f0(a1, a2, a3) {
    class C4 {
    }
    const v5 = class {
    }
    const v6 = {};
    const v7 = [f0,f0,f0,f0,f0];
    const v8 = class {
    }
    function f9() {
        eval(a2);
        return v6;
    }
    Object.defineProperty(v7, "toString", { get: f9 });
    return f0;
}
const v12 = f0(f0, f0, f0);
const v13 = f0();
%OptimizeMaglevOnNextCall(f0);
f0(v13, v12, v12);
