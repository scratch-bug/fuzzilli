new WeakSet();
function f4() {
    return 1073741825;
}
[-1.2803103636210866e+308,1.0,-3.0,-1.7976931348623157e+308];
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 128;
    this.g = -9223372036854775808;
    this.d = a12;
}
new F9(128, 1073741825, 1073741825, 128);
new Array(9);
function F19(a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    function f23(a24, a25, a26) {
        function f27() {
            return F19;
        }
        function f28() {
            function f29() {
                gc();
                return { done: true };
            }
            return { next: f29 };
        }
        const v36 = Symbol.iterator;
        const t27 = f27.bind(null, ...{ [v36]: f28 });
        const v40 = new t27(Symbol, f23, a25);
        return v40;
    }
    f23(F19, f23, a21);
    %OptimizeFunctionOnNextCall(f23);
}
const v42 = new F19();
const v43 = new F19(F19, v42);
v43.constructor = f4;
const t37 = v43.constructor;
new t37();
