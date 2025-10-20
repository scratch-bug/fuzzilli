function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(this, "p", { writable: true, configurable: true, enumerable: true, value: a4 });
    new Int8Array(4294967295);
    this.b = F0;
    for (const v9 in this) {
    }
}
new F0();
new F0();
