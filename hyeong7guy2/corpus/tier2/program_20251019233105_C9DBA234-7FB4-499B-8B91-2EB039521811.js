function f1() {
    const v2 = [536870912,256,127,4294967296];
    for (let i4 = 0;
        i4 < 20000;
        (() => {
            ++i4;
            for (let v9 = 0; v9 < 5; v9++) {
            }
        })()) {
        i4 * i4;
        v2[i4] = i4;
    }
}
Object.defineProperty(Uint8Array, "toString", { writable: true, enumerable: true, value: f1 });
("NFC").concat(Uint8Array);
