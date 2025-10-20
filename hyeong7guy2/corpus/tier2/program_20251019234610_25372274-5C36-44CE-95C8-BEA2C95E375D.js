const v1 = {};
function f2() {
    return Symbol;
}
function f3() {
    function f4() {
        for (let i = 0; i < 5; i++) {
            function F5(a7, a8) {
                if (!new.target) { throw 'must be called with new'; }
                function f9(a10, a11, a12) {
                    ("257").codePointAt(a11);
                    ("257").constructor.fromCodePoint(v1);
                    return a12;
                }
                try { f9(f9, this, F5); } catch (e) {}
                %OptimizeFunctionOnNextCall(f9);
            }
            new F5(f4, F5);
        }
        return { done: true };
    }
    return { next: f4 };
}
const v22 = Symbol.iterator;
f2.bind(null, ...{ [v22]: f3 });
