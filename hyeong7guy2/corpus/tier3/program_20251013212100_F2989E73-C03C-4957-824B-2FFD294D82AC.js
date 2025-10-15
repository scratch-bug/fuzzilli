function f0(a1) {
    let a = 1.1;
    const v5 = { p: 2.2 };
    const v6 = () => {
        return a1;
    };
    v6();
    eval("");
}
for (let i12 = 0; i12 < 25000; i12++) {
    f0(false);
}
f0();
