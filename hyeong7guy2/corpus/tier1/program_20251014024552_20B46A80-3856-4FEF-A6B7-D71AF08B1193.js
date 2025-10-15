function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    a3++;
    Object.defineProperty(this, "a", { writable: true, configurable: true, value: a3 });
}
new F1(177);
new F1();
new F1();
