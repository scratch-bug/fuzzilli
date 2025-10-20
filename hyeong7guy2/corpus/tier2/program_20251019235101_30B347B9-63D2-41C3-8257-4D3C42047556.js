const v0 = {};
function f1(a2, a3) {
    a2.log2;
    class C5 {
    }
    C5.b = v0;
    const v6 = [1024,257,1073741825,10,2147483649,27668,9223372036854775807,10,268435456,-624873012];
    for (let v7 = 0; v7 < 5; v7++) {
        v6["pop"]();
    }
    C5.b = C5;
    try {
        f1();
    } catch(e11) {
    }
    return f1;
}
f1(Math);
%OptimizeMaglevOnNextCall(f1);
try { f1(); } catch (e) {}
