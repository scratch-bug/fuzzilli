function f0(a1, a2) {
    const v5 = {
        set d(a4) {
        },
        ...a2,
    };
    v5.d;
    return v5;
}
f0(f0, f0(f0, f0));
