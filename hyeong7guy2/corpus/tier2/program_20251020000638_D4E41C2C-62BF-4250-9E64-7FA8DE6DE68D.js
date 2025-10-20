const v2 = new Int16Array(127);
function f4() {
    return v2;
}
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
        function f10(a11) {
            function F12(a14, a15, a16) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F12.constructor = f4;
            const t12 = F12.constructor;
            const v18 = t12();
            const v19 = v18[15];
            v18[15];
            function f21() {
                Symbol[this] = v19;
            }
        }
        f10();
        %OptimizeMaglevOnNextCall(f10);
        return f10;
    }
    Object.defineProperty(this, "toString", { get: f9 });
}
const v23 = new F5();
v23.toString;
v23.toString();
let v26 = 0;
v26++;
