function f1(a2, a3) {
    try { a2(); } catch (e) {}
    const v5 = a2.name;
    let v6;
    try { v6 = v5.valueOf(); } catch (e) {}
    Uint8Array & (v6 & v6);
    return f1;
}
f1(f1);
%OptimizeFunctionOnNextCall(f1);
f1(f1);
