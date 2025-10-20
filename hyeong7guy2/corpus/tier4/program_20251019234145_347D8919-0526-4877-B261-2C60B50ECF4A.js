const v0 = /Aa/dsyvi;
async function* f1(a2, a3, a4, a5) {
    for (let v6 = 0; v6 < 5; v6++) {
        throw v0;
        function f7(a8, a9) {
            return v0;
        }
    }
    return a2;
}
f1();
f1();
%OptimizeMaglevOnNextCall(f1);
f1();
