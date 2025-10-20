const v1 = Symbol.iterator;
function f4() {
    const v5 = {};
    Object.defineProperty(v5, "toJSON", { configurable: true, enumerable: true, value: v1 });
    const t4 = JSON.stringify;
    t4(v5);
    for (let i11 = 0, i12 = 10; i12; i12--) {
    }
    return v5;
}
Object.defineProperty(Int16Array, "toString", { get: f4 });
const v18 = [10000,127,12,-13,34599,356829498,256];
try { v18.splice(5.0, Int16Array); } catch (e) {}
