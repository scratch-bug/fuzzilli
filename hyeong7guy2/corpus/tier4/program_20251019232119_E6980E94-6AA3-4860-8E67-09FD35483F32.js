async function f0(a1, a2) {
    for (let i5 = 0, i6 = 10;
        (() => {
            function F10(a12, a13, a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                const v16 = a14.constructor;
                try { v16.asUintN(i6); } catch (e) {}
            }
            new F10(Float32Array, true, 1102284067n);
            return i6;
        })();
        i6--) {
    }
    await f0;
    return f0;
}
f0(f0, f0);
f0();
%OptimizeFunctionOnNextCall(f0);
