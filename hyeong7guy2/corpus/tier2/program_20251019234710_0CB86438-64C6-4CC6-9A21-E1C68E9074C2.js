function f2() {
    return f2;
}
function f3() {
    function f4() {
        for (let i = 0; i < 5; i++) {
            function F5(a7, a8) {
                if (!new.target) { throw 'must be called with new'; }
                function f9(a10, a11, a12) {
                    for (let v23 = 0; v23 < 5; v23++) {
                    }
                    Uint8Array.of(151, 9, 209, 34, 38, 30, 9, 212, 200, 52, 115);
                    return F5;
                }
                f9(f2, f4, a7);
                %OptimizeFunctionOnNextCall(f9);
            }
            new F5();
        }
        return { done: true };
    }
    return { next: f4 };
}
const v30 = Symbol.iterator;
f2.bind(null, ...{ [v30]: f3 });
