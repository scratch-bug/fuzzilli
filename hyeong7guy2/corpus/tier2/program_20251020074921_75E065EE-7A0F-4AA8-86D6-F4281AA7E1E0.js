function f1() {
    return Symbol;
}
function f2() {
    function f3() {
        return { done: true };
    }
    const v6 = { next: f3 };
    function F8(a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        function f12(a13, a14, a15) {
            function F16(a18, a19, a20, a21) {
                if (!new.target) { throw 'must be called with new'; }
                function f22() {
                }
                function f23(a24) {
                    const v25 = {};
                    function f26(a27, a28, a29) {
                        const v35 = {
                            toString(a31, a32) {
                                eval();
                            },
                        };
                        return v35;
                    }
                    f26(f26);
                    f26(f12);
                    f26();
                    f26();
                    return F8;
                }
                Object.defineProperty(this, "e", { get: f22, set: f23 });
            }
            const v40 = new F16(this, F16, 170);
            v40.e = v40;
            return f1;
        }
        f12(f1, 170, this);
        %OptimizeFunctionOnNextCall(f12);
    }
    new F8();
    new F8();
    new F8();
    return v6;
}
const v45 = Symbol.iterator;
f1.bind(null, ...{ [v45]: f2 });
