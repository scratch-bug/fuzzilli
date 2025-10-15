function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        try { a5.call(a6, a2, a5); } catch (e) {}
        const v12 = Number.isNaN(Math.trunc(f4));
        function F13(a15, a16, a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
        }
        new F13(F13, v12);
        return a6;
    }
    f4(f4);
    %OptimizeFunctionOnNextCall(f4);
}
let v21;
try { v21 = F0(); } catch (e) {}
const v22 = new F0(v21, v21);
const t17 = v22.constructor;
new t17();
