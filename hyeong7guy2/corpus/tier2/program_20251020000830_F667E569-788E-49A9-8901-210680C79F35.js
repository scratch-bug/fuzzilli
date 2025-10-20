function f1() {
    return f1;
}
function f2() {
    function f3() {
        for (let i = 0; i < 5; i++) {
            function F4(a6, a7) {
                if (!new.target) { throw 'must be called with new'; }
                function f8(a9, a10, a11) {
                    a9 ?? a9;
                    a11 ?? a11;
                    const v15 = -9007199254740992n >= -9007199254740992n;
                    function F16(a18, a19, a20, a21) {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    const v22 = new F16(a10, F4, v15);
                    try { v22.constructor(); } catch (e) {}
                    return f3;
                }
                f8();
                %OptimizeFunctionOnNextCall(f8);
            }
            new F4();
        }
        return { done: true };
    }
    return { next: f3 };
}
const v29 = Symbol.iterator;
f1.bind(null, ...{ [v29]: f2 });
