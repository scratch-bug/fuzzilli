const v2 = new Uint32Array(Uint32Array);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            function f10(a11) {
                v2[2] &= 9007199254740992;
                return a9;
            }
            const v12 = f10.call();
            f7.constructor = f10;
            const v13 = f7.constructor;
            v13.call(a5, 9007199254740992, v13, v12);
        }
        f8();
        f8();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v17 = new F3(9007199254740992, F3);
v17.toString();
