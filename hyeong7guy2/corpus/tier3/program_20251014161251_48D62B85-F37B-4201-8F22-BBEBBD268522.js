function f0(a1, a2) {
    const v3 = a2 ^ a2;
    v3 + v3;
    try {
        f0(a1, v3);
    } catch(e6) {
    }
    arguments[1] = arguments;
    return a1;
}
f0();
f0();
