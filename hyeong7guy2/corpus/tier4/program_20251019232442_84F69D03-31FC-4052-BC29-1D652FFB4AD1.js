class C1 {
}
function f2() {
    return SharedArrayBuffer;
}
function f3(a4) {
    const v6 = [];
    Reflect.construct(SharedArrayBuffer, v6, f2);
    return v6;
}
C1.valueOf = f3;
C1.valueOf();
