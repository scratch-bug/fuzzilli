async function f0(a1, a2) {
    try { a2(a2); } catch (e) {}
    for (let [i7, i8] = (() => {
            let v5 = 10;
            v5++;
            return [0, v5];
        })();
        (() => {
            const v9 = i8 >>> i8;
            function f10(a11, a12, a13) {
                const v14 = {};
                return a12;
            }
            f10();
            f10(f10, v9);
            return i8;
        })();
        (() => {
            i8--;
            function F20(a22, a23) {
                if (!new.target) { throw 'must be called with new'; }
                function f24() {
                    function f25(a26) {
                        ("2147483647").charAt(-1098098658);
                        return a23;
                    }
                    return f25;
                }
                Object.defineProperty(this, "toString", { get: f24 });
            }
            const v30 = new F20();
            const t13 = v30.toString;
            t13();
        })()) {
    }
    await f0;
    return a1;
}
f0(f0, f0);
%OptimizeFunctionOnNextCall(f0);
