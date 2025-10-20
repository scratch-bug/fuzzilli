[];
function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
new F1();
function F5() {
    if (!new.target) { throw 'must be called with new'; }
}
try { F5(); } catch (e) {}
class C11 {
}
for (let v12 = 0; v12 < 10; v12++) {
    function f13() {
        const v15 = ("NFKD").codePointAt();
        C11[Symbol] = "NFKD";
        const v17 = [1e-15,303.3206814842317,1000.0];
        function F18(a20, a21) {
            if (!new.target) { throw 'must be called with new'; }
            function f22() {
                function f23(a24) {
                    -9007199254740990 >> a20;
                    const v27 = v17.constructor;
                    v27().map(v27);
                }
                return f23;
            }
            Object.defineProperty(this, "toString", { get: f22 });
        }
        const v30 = new F18();
        v30.toString();
        v15 + v15;
    }
    f13();
    %OptimizeFunctionOnNextCall(f13);
}
