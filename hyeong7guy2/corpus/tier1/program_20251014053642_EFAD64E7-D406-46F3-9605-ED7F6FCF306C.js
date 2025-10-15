function f0() {
    for (let i2 = 0;
        (() => {
            for (let v3 = 0; v3 < 5; v3++) {
            }
            return i2 < 20000;
        })();
        ) {
        ++i2;
    }
    return f0;
}
const t12 = ({ next: f0 }).next;
t12();
