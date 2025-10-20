function f2() {
    const v4 = [31215.68500756973,6.53257897060967];
    v4[15] |= 256;
    return v4;
}
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
        function f10(a11) {
            function F12(a14, a15, a16) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F12.constructor = f2;
            const t13 = F12.constructor;
            const v18 = t13();
            v18.unshift(211);
            const v20 = v18[15];
            v20 ?? v20;
            function f22() {
                Symbol[this] = v20;
                return a11;
            }
            return this;
        }
        f10();
        f10();
        %OptimizeMaglevOnNextCall(f10);
        return f10;
    }
    Object.defineProperty(this, "toString", { get: f9 });
}
const v25 = new F5();
v25.toString(v25, Symbol, 211, 211);
