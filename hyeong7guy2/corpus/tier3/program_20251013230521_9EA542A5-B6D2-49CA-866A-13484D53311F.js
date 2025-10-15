function f0(a1, a2, a3) {
    const v4 = a1();
    a1(f0, v4, v4, f0);
    return v4;
}
new Promise(f0);
