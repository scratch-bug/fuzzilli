function f1() {
    return f1;
}
function f2() {
    function f3() {
        for (let i = 0; i < 5; i++) {
            function F4(a6, a7) {
                if (!new.target) { throw 'must be called with new'; }
                function f8(a9, a10, a11) {
                    const v13 = ("257").constructor;
                    let v14;
                    try { v14 = new v13(f2); } catch (e) {}
                    return v14;
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
const v20 = Symbol.iterator;
f1.bind(null, ...{ [v20]: f2 });
