class C0 {
}
const v2 = {};
const v3 = new Proxy(C0, v2);
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8(a9, a10, a11) {
        function F12(a14, a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            function F18(a20, a21) {
                if (!new.target) { throw 'must be called with new'; }
                a20[1] = a20;
            }
            new F18(v3);
        }
        const v23 = new F12();
        return v23;
    }
    f8(a7, this, Proxy);
    %OptimizeFunctionOnNextCall(f8);
}
const v25 = new F4();
const v26 = new F4(v25, F4);
new F4(v26, v2);
