function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
class C3 extends F1 {
}
class C4 {
}
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function f10() {
        function f11(a12) {
            function f13() {
                try {
                const t0 = "p";
                t0();
                } catch (e) {}
                for (let v16 = 0; v16 < 5; v16++) {
                    function f17(a18, a19) {
                        return v16;
                    }
                }
            }
            const v20 = f13();
            const v21 = v20 >> v20;
            const v22 = `string${536870912n}undefined`;
            const v23 = new C3();
            const v24 = v23?.constructor;
            new v24(v24, v21);
            try { C4(Symbol, f10, C4, v22); } catch (e) {}
            return F1;
        }
        f11();
        f11();
        %OptimizeMaglevOnNextCall(f11);
        return f11;
    }
    Object.defineProperty(this, "toString", { get: f10 });
}
const v29 = new F6(F1, 536870912n);
v29.toString();
