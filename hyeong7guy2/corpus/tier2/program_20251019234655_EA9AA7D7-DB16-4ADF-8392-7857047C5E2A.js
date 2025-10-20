class C0 {
    p(a2, a3, a4) {
        delete this[-2];
    }
}
const v6 = new C0();
function f8(a9, a10) {
    function f11(a12, a13) {
        a12.p();
        return a13.Realm;
    }
    return f11;
}
Symbol.toString = f8;
function F17(a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    function f21() {
        function f22(a23) {
            function f24() {
                ("p").link(a19, "p", f24);
                for (let v27 = 0; v27 < 5; v27++) {
                    function f28(a29, a30) {
                        return f22;
                    }
                }
            }
            const v31 = f24();
            v31 >> v31;
            const v33 = `string${536870912n}undefined`;
            const t27 = Symbol.toString(a19);
            t27(v6, this);
            return v33.normalize();
        }
        f22(a19);
        f22(a20);
        %OptimizeMaglevOnNextCall(f22);
        return f22;
    }
    Object.defineProperty(this, "toString", { get: f21 });
}
const v39 = new F17(F17, C0);
v39.toString();
