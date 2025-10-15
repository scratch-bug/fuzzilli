const v1 = class {
}
function f2() {
    return 25000;
}
v1[Symbol.toPrimitive] = f2;
v1.hasOwnProperty(v1);
class C7 {
}
function f9(a10, a11) {
    try { a10.call(a11); } catch (e) {}
    try { a11.findIndex(); } catch (e) {}
    return a10;
}
f9(C7, Uint8Array);
const v16 = new Proxy(C7, { construct: f9 });
for (let v17 = 0; v17 < 50; v17++) {
    new v16();
}
