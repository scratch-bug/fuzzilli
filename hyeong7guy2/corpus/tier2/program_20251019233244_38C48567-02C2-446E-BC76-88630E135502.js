function f3() {
    return 16;
}
function f4() {
    function f5() {
        for (let i = 0; i < 5; i++) {
            function F6(a8, a9) {
                if (!new.target) { throw 'must be called with new'; }
                function f10(a11, a12, a13) {
                    Uint8Array.of(151, 9, 209, 34, 38, 30, 9, 212, 200, 52, 115, 16, 170, 145, -2147483648, 9, 210, 124, 206, 222, 149, 63, 143, 21, 210, 47, 1, 112, 182, 129, 206, 143, 85, 235, 136, 91, 152, 80, 114, 124, 16, 5, 237, 16, 211, 219, 16, 107, 151, 131, 204, 79, 121, 213);
                    const t9 = ("257").constructor;
                    t9();
                    return a11;
                }
                f10(f5, f10, 9);
                %OptimizeFunctionOnNextCall(f10);
            }
            new F6(f5, 9);
        }
        return { done: true };
    }
    return { next: f5 };
}
const v71 = Symbol.iterator;
f3.bind(null, ...{ [v71]: f4 });
