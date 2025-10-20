const v0 = [];
function f1(a2) {
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        a5 ?? a5;
        let v8;
        try { v8 = this.propertyIsEnumerable(); } catch (e) {}
        v8 && v8;
        a5 ?? a5;
        function f11() {
            function f12(a13) {
                function F16(a18, a19) {
                    if (!new.target) { throw 'must be called with new'; }
                    this?.__lookupGetter__;
                    a19--;
                    this.e = a19;
                }
                const v22 = new F16("2147483647", -3612);
                const v23 = v22.e;
                v23 * v23;
                new F16(v23, a5);
                return a2;
            }
            return f12;
        }
        Object.defineProperty(this, "toString", { get: f11 });
    }
    const v26 = new F3();
    v26.toString();
    return f1;
}
const v28 = f1();
function F29(a31, a32) {
    if (!new.target) { throw 'must be called with new'; }
    function f33() {
        function f34(a35) {
            return v0.forEach(v28);
        }
        f34.call();
        f34(v28);
        %OptimizeMaglevOnNextCall(f34);
        return f34;
    }
    Object.defineProperty(this, "toString", { get: f33 });
}
const v39 = new F29(v28, F29);
class C40 {
    static [v39](a42, a43, a44) {
    }
}
