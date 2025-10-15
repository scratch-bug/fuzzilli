function f0(a1, a2) {
    const arr = [1.1,2.2,3.3,4.4,5.5];
    new P(a1, a2);
    let index = a2.idx;
    for (let i15 = 0; i15 < 1; ++i15) {
        index = index + 1;
    }
    arr[index] = 6.6;
}
const v31 = {
    construct(a27, a28) {
        a28[0];
        return {};
    },
};
const v32 = new Proxy(Object, v31);
const P = v32;
let v34 = false;
for (let i36 = 0; i36 < 25000; ++i36) {
    if (i36 === 24999) {
        v34 = true;
    }
    let holder = { idx: 0 };
    f0(v34, holder);
}
