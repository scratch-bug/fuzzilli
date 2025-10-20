async function f2(a3, a4) {
    try { a4(); } catch (e) {}
    -15 == "America/La_Paz";
    await "America/La_Paz";
    return -15;
}
f2(1024, f2);
%OptimizeFunctionOnNextCall(f2);
