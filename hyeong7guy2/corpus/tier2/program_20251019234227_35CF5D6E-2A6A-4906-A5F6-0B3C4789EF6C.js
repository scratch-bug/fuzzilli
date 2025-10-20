function f0(a1) {
    let v2;
    try { v2 = a1.call(); } catch (e) {}
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7() {
            function f8(a9) {
                function f10(a11) {
                    function f13() {
                        return a5;
                    }
                    function f14() {
                        function f15() {
                            return { done: true };
                        }
                        return { next: f15 };
                    }
                    const v19 = Symbol.iterator;
                    f13.bind(null, ...{ [v19]: f14 });
                    return f10;
                }
                const v23 = [F3];
                for (let v24 = 0; v24 < 5; v24++) {
                    v23.forEach(f10);
                }
                a9 & a9;
                return a1;
            }
            %OptimizeMaglevOnNextCall(f8);
            return f8;
        }
        Object.defineProperty(this, "toString", { get: f7 });
    }
    const v27 = new F3(v2, f0);
    v27.toString();
    return F3;
}
f0(f0);
