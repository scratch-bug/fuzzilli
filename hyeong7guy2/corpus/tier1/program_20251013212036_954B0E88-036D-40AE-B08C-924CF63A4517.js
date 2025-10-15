function f0(a1) {
    a1[0];
    const v5 = new Array(a1[1]);
    return v5;
}
const v8 = [1.1,{}];
for (let i10 = 0; i10 < 20000; i10++) {
    v8[1] = 2;
    f0(v8);
}
v8[1] = {};
f0(v8);
