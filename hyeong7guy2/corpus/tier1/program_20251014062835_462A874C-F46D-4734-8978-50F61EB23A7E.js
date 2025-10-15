function f2() {
    const t1 = Temporal.PlainDate;
    new t1(41617);
    return Uint8Array;
}
Object.defineProperty(Uint8Array, "toString", { writable: true, enumerable: true, value: f2 });
try { ("NFC").concat(Uint8Array); } catch (e) {}
