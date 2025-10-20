const v3 = new Uint32Array(248);
function f4(a5) {
    return a5.slice();
}
Object.defineProperty(v3, "constructor", { writable: true, enumerable: true, value: f4 });
const v7 = v3.constructor;
function f8(a9, a10) {
    return v3;
}
v7[Symbol.species] = f8;
v7(v3);
