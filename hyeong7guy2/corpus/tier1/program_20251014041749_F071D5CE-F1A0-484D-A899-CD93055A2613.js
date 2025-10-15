function f1() {
    const t1 = Temporal.ZonedDateTime;
    return t1(Uint8Array, Uint8Array, Uint8Array);
}
Object.defineProperty(Uint8Array, "toString", { writable: true, enumerable: true, value: f1 });
try { ("NFC").concat(Uint8Array); } catch (e) {}
