function f2() {
    const v3 = [536870912,256,127,4294967296];
    for (let v4 = 0; v4 < 10; v4++) {
        v3[v4 * -9007199254740991] = v4;
    }
}
Object.defineProperty(Uint8Array, "toString", { writable: true, enumerable: true, value: f2 });
("NFC").concat(Uint8Array);
