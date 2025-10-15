class C0 {
}
const v1 = /4a+/muyd;
async function f2(a3, a4) {
    v1.compile();
    try { a3(a3, C0, a4, ...v1); } catch (e) {}
    await f2;
    return C0;
}
f2(C0, f2);
f2();
%OptimizeFunctionOnNextCall(f2);
