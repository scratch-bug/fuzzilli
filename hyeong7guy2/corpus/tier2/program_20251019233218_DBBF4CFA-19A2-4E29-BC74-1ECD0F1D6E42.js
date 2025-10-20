function f3() {
    const v4 = [536870912,256,127,4294967296];
    for (let i5 = (() => {
            Object.defineProperty(v4, 268435439, { set: Symbol });
            return 2646;
        })();
        i5 < 20000;
        ++i5) {
        v4[i5] = i5;
    }
    for (const v11 in v4) {
    }
}
Object.defineProperty(Uint8Array, "toString", { writable: true, enumerable: true, value: f3 });
("NFC").concat(Uint8Array);
