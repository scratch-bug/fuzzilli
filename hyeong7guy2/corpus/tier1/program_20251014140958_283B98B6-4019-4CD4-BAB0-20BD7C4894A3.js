function f1() {
    return f1;
}
const v2 = {};
Object.defineProperty(v2, "e", { writable: true, configurable: true, value: f1 });
const v3 = {};
v3.e = v3;
Object.defineProperty(v2, "e", { enumerable: true, value: NaN });
