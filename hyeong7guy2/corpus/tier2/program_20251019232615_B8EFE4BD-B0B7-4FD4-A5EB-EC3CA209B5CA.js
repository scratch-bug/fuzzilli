function f1() {
    const v2 = [536870912,256,127,4294967296];
    for (let v3 = 0; v3 < 250; v3++) {
        v2[v3 * v3] = v3;
    }
}
Object.defineProperty(Uint8Array, "toString", { writable: true, enumerable: true, value: f1 });
("NFC").concat(Uint8Array);
