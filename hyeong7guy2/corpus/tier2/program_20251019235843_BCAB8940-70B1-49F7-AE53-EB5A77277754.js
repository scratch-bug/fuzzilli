function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        F0 |= F0;
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            class C17 {
            }
            function f18(a19, a20) {
                for (let i21 = "hX5";
                    i21 < 10000;
                    (() => {
                        const v25 = a19 !== a8;
                        [v25,v25,v25,v25,this];
                        i21++;
                    })()) {
                }
                return F0;
            }
            Object.defineProperty(C17, "constructor", { writable: true, enumerable: true, value: f18 });
            const t23 = C17.constructor;
            t23();
        }
        new F10(this, a5, F0, a5);
        return a8;
    }
    f6(F0, F0, f6);
    %OptimizeFunctionOnNextCall(f6);
}
const v33 = new F2(F0, F0);
new F2(v33, F2);
new F2();
