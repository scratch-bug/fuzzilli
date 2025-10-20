let v2 = [-26369n,-26369n,-26369n];
function f3(a4, a5) {
    ({"a":a5,"g":a4,"prototype":v2,} = Date);
    return -26369n;
}
v2.constructor = f3;
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function f10() {
        function f11(a12) {
            const t10 = v2.constructor;
            const v14 = t10(-26369n);
            v14.length;
            try { v14.forEach(); } catch (e) {}
            return v2;
        }
        f11(-26369n);
        %OptimizeMaglevOnNextCall(f11);
        return f11;
    }
    Object.defineProperty(this, "toString", { get: f10 });
}
const v18 = new F6();
v18.toString(f3, f3, v18);
v18.toString();
