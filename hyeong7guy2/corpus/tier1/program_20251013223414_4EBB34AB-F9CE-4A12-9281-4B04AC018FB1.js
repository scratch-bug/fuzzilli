function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = String.prototype;
    Object.defineProperty(v5, "toJSON", { configurable: true, value: v5 });
}
new F0(F0, F0);
new F0();
