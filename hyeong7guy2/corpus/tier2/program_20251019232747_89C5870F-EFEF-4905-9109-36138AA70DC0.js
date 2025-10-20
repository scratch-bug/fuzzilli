function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    class C6 extends WeakSet {
    }
    C6.b = C6;
    function F8(a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        function f12() {
            let v13 = -439501.18159386097;
            v13++;
            function f15(a16, a17, a18) {
            }
            f15();
            const v21 = {
                a: v13,
                [-9007199254740990]() {
                },
            };
            v21.a;
        }
        f12();
        %OptimizeMaglevOnNextCall(f12);
        f12();
    }
    new F8();
}
new F1();
new F1();
