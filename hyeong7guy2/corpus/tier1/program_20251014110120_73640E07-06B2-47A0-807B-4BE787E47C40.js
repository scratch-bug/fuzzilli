function f1(a2, a3) {
    Reflect.construct(a3, a2).findIndex(Uint16Array);
    return Uint16Array;
}
const v7 = {};
function f8(a9, a10) {
    return [];
}
v7.get = f8;
function f13() {
}
const v14 = new Proxy(f13, v7);
for (let v15 = 0; v15 < 100; v15++) {
    f1(f1, v14);
}
