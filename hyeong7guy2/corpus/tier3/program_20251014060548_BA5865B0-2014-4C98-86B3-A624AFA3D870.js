const v0 = [-1024,4,-9223372036854775808,1073741824,4,-6,-2,-42709];
async function* f2(a3, a4, a5) {
    yield* "object";
    function f6(a7) {
        return a5;
    }
    class C8 extends f6 {
    }
    const v9 = class {
    }
    function f10(a11, a12, a13) {
        const v14 = { [a12]: v9 };
        return a11;
    }
    f10();
    yield* v0;
    return f2;
}
const v16 = f2(f2, "object", v0);
const v17 = f2(f2, "object", v16);
%OptimizeMaglevOnNextCall(f2);
f2(v16, v17, v0);
