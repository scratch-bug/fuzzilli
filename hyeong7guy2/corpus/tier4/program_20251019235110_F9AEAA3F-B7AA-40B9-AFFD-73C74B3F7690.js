class C1 extends Int32Array {
}
const v2 = new C1();
function f3(a4, a5, a6) {
    a4[a4];
    return f3;
}
function f8(a9, a10) {
    for (const v11 in v2) {
    }
    return a9;
}
f3[Symbol.toPrimitive] = f8;
f3(f3);
