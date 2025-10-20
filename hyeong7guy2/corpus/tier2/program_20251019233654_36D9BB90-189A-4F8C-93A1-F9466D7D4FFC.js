async function f0(a1, a2) {
    try { a2(); } catch (e) {}
    for (let [i7, i8] = (() => {
            let v5 = 10;
            v5++;
            return [0, v5];
        })();
        i8;
        (() => {
            i8--;
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                function f16() {
                    function f17(a18) {
                        ("2147483647").charAt(-1098098658);
                        return a15;
                    }
                    return f17;
                }
                Object.defineProperty(this, "toString", { get: f16 });
            }
            const v22 = new F12();
            const t13 = v22.toString;
            t13();
        })()) {
    }
    await f0;
    return a2;
}
f0(f0, f0);
%OptimizeFunctionOnNextCall(f0);
