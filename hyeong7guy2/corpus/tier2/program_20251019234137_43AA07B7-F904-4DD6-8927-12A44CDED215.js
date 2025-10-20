for (let i2 = 0, i3 = 10; i3; i3--) {
}
function f9() {
    for (let v11 = 0; v11 < 5; v11++) {
        const v19 = {
            m(a13, a14, a15, a16) {
                eval(a16);
                return a16;
            },
        };
        (v11 - v11 ? v19 : -11).__lookupGetter__;
    }
    return -11;
}
f9();
f9();
%OptimizeFunctionOnNextCall(f9);
f9();
