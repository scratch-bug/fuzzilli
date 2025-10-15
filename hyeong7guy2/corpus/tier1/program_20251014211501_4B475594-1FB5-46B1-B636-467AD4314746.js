function f2() {
    const v3 = [536870912,256,127,4294967296];
    for (let i4 = 256; i4 < 20000; ++i4) {
        v3[i4] = i4;
    }
}
Object.defineProperty(Uint8Array, "toString", { writable: true, enumerable: true, value: f2 });
("NFC").concat(Uint8Array);
