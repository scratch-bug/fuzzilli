const t0 = Intl.Collator;
const v2 = t0();
function f3(a4) {
    return v2.compare(a4, a4);
}
f3();
f3();
%OptimizeFunctionOnNextCall(f3);
f3(f3);
