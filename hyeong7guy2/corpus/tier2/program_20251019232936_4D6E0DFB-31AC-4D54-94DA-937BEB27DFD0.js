const v2 = new Int16Array(127);
function f3() {
    return v2;
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            try { a10.apply(); } catch (e) {}
            function F12(a14, a15, a16) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F12.constructor = f3;
            const t13 = F12.constructor;
            const v18 = t13(f9);
            const v19 = v18[15];
            const v20 = v19 >> v19;
            v20 >> v20;
            v18[15];
            eval(v18);
            return f9;
        }
        f9(f9);
        %OptimizeMaglevOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v26 = new F4(F4, F4);
v26.toString(v2);
