const v1 = gc();
gc();
const v3 = /x\x60?/sgv;
function f4() {
    return v1;
}
function f5(a6) {
    return a6;
}
Object.defineProperty(v3, "e", { configurable: true, enumerable: true, get: f4, set: f5 });
("a").replaceAll(v3);
