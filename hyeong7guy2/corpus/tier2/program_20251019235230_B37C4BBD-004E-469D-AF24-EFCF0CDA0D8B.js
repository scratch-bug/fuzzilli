function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            return Array.apply().unshift(a6);
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v10 = new F0();
v10.toString(F0);
