async function* f1(a2, a3, a4, a5) {
    a5 >>> a5;
    const t1 = ("65535").constructor;
    new t1(9);
    return await a4;
}
const v11 = f1();
v11.next(v11);
%OptimizeMaglevOnNextCall(f1);
