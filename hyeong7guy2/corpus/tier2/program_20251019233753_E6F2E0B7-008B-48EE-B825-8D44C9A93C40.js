function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            d8.getExtrasBindingObject(d8, a2, d8, d8, f5).trace();
            return d8;
        }
        f5.call(F0, F0, a3);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v11 = new F0(F0, F0);
v11.toString;
