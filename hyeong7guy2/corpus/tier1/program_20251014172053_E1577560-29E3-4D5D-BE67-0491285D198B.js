function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = this.constructor;
    try { new v2(); } catch (e) {}
    for (let v4 = 0; v4 < 5; v4++) {
        const v6 = { a: 1 };
    }
    const v8 = { a: 1.1 };
    v8.a = v8;
}
new F0();
