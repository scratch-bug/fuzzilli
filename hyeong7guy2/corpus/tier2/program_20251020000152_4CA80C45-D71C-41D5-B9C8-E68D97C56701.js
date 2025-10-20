async function f0(a1, a2) {
    try { a2(f0); } catch (e) {}
    for (let i6 = 0, i7 = 10;
        i6--, i7;
        (() => {
            i7--;
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                function f16() {
                    function f17(a18) {
                        ("2147483647").charAt(-1098098658);
                        return a14;
                    }
                    return f17;
                }
                Object.defineProperty(this, "toString", { get: f16 });
            }
            const v22 = new F12(i7, F12);
            const t13 = v22.toString;
            t13();
        })()) {
    }
    await f0;
    return f0;
}
f0(f0, f0);
%OptimizeFunctionOnNextCall(f0);
