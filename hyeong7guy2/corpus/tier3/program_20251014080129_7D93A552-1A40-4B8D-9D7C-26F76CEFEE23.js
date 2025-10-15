async function f1(a2, a3) {
    const v4 = a2.constructor;
    try { v4(f1, 2); } catch (e) {}
    return f1;
}
f1(f1);
