function f1(a2, a3) {
    return 20000;
}
Object.defineProperty(f1, 1, { writable: true, configurable: true, value: 20000 });
const v5 = new Float64Array(f1);
v5.toSorted();
