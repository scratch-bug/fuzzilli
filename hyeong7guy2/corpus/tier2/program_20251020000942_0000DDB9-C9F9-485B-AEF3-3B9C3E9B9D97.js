let v1 = 2646;
v1++;
function f4() {
    const v5 = [536870912,256,127,4294967296];
    for (let i6 = (() => {
            Object.defineProperty(v5, 268435439, { set: Symbol });
            return v1;
        })();
        i6 < 20000;
        ++i6) {
        v5[i6] = i6;
    }
    for (const v12 in v5) {
    }
}
Object.defineProperty(Uint8Array, "toString", { writable: true, enumerable: true, value: f4 });
("NFC").concat(Uint8Array);
