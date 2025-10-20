function f1() {
    return ([31215.68500756973,6.53257897060967]).flat();
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            function F11(a13, a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F11.constructor = f1;
            const t11 = F11.constructor;
            t11(this, 211, f9).unshift(211);
            return 211;
        }
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v19 = new F4();
v19.toString();
