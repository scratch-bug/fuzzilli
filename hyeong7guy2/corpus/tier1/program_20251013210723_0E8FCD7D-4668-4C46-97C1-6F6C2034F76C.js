function poc(a1) {
    a1.a = 2.3023e-320;
    return a1.b;
}
for (let i5 = 0; i5 < 20000; i5++) {
    const v12 = {};
    let o = { a: 1, b: v12 };
    poc(o);
}
const v16 = {};
let o = { b: v16 };
poc(o);
