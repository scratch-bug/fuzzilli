function f1() {
    return true;
}
Object.defineProperty(Int32Array, Symbol.toPrimitive, { writable: true, configurable: true, value: f1 });
for (let i5 = Int32Array;
    (() => {
        let v6 = i5.BYTES_PER_ELEMENT;
        v6--;
        return i5 < 20000;
    })();
    i5++) {
}
