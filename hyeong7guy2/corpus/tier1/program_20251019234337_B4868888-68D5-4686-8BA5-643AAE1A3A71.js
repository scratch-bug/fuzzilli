function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a4;
}
const v6 = new F2(-28058);
const v7 = new F2(-9007199254740992);
class C8 {
}
function f10(a11, a12) {
    function f13(a14, a15) {
        a15.e = v7;
        const v16 = a15.e;
        v16.g = v16;
        return f13;
    }
    return f13;
}
Symbol.toString = f10;
function F18(a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    function f22() {
        function f23(a24) {
            function f25() {
                ("p").link(a20, "p", f25);
                for (let v28 = 0; v28 < 5; v28++) {
                    function f29(a30, a31) {
                        return f29;
                    }
                }
            }
            const v32 = f25();
            v32 >> v32;
            const v34 = `string${536870912n}undefined`;
            const t31 = Symbol.toString();
            const v36 = t31(C8, this);
            try { v36(Symbol, f22, v36, v34); } catch (e) {}
            return f23;
        }
        f23.call(v6);
        f23(Symbol);
        %OptimizeMaglevOnNextCall(f23);
        return f23;
    }
    Object.defineProperty(this, "toString", { get: f22 });
}
const v40 = new F18();
v40.toString();
