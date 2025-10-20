function f0() {
    for (let i2 = 0;
        (() => {
            const v5 = Math.ceil(i2);
            const v6 = { f: v5 };
            return i2 < 20000;
        })();
        i2++) {
    }
    return f0;
}
class C11 extends f0 {
}
new C11();
