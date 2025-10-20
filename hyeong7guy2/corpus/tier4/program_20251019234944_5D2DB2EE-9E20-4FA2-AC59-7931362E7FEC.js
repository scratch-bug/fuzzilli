function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = a3.length;
    v7 != v7;
}
new F1("resize");
async function f10(a11, a12) {
    new F1(arguments);
    await a12;
    return arguments;
}
f10();
f10();
%OptimizeFunctionOnNextCall(f10);
