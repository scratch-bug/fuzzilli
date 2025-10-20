function f2() {
    return Int16Array;
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            new F3(f8, a5, f2, F3, Int16Array, this, a9, 128);
            eval();
            return f8;
        }
        f8(Int16Array);
        f8();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v15 = new F3(f2, 128);
v15.toString(Int16Array, f2);
