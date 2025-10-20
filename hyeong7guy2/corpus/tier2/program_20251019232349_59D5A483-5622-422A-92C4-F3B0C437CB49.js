class C0 {
}
function f2() {
    return C0 ^= -2147483647;
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            function F10(a12, a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F10.constructor = f2;
            const t13 = F10.constructor;
            t13();
        }
        f8(F3);
        f8();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
    this > this;
}
new F3();
