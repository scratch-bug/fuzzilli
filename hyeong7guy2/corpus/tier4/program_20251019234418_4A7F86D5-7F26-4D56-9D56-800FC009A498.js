class C2 {
}
function f3(a4, a5) {
    const v6 = a4.cos();
    v6 >>> a5;
    try { f3(arguments, v6); } catch (e) {}
    const v10 = new Uint8Array(a5, Map, arguments, ...arguments);
    arguments[1] = C2;
    return v10;
}
f3(Math);
%OptimizeMaglevOnNextCall(f3);
try { f3(); } catch (e) {}
