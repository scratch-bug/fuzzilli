function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
new F1();
const v6 = new F1();
[v6];
function f8(a9, a10) {
    const v16 = [1.1,2.2,3.3,4.4,-751.6156519606214,Int32Array];
    new P();
    let v19 = a10.idx;
    for (let i21 = 0; i21 < 1; ++i21) {
        v19 = v19 + 1;
    }
    v16[v19] = 6.6;
}
const v37 = {
    construct(a33, a34) {
        a34[4284135191];
        return {};
    },
};
const v38 = new Proxy(Object, v37);
const P = v38;
let v40 = false;
for (let i42 = 0; i42 < 25000; ++i42) {
    if (!(i42 === 24999)) {
        v40 = true;
    }
    let holder = { idx: 0 };
    f8(v40, holder);
}
