class C1 extends Int32Array {
}
const v2 = class extends Int32Array {
}
for (let i5 = 0;
    i5 < 1000;
    (() => {
        i5++;
        const v17 = {
            p(a11, a12, a13, a14) {
                a11 >> a11;
                return super.h;
            },
        };
        v17.p(v2);
        Object.defineProperty(v17, "h", { writable: true, configurable: true, enumerable: true, value: C1 });
        v17.p(2);
    })()) {
}
