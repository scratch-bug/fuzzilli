function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    try {
        const v7 = Temporal.PlainDateTime;
        Object.defineProperty(v7, "second", { enumerable: true, value: F0 });
        v7.from(v7);
    } catch(e9) {
    }
}
new F0();
