function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = this.constructor;
    try { new v3(v3, v3, this, v3, F0); } catch (e) {}
    for (let i6 = 0;
        (() => {
            const v8 = i6 < 0;
            v8 && v8;
            return v8;
        })();
        ) {
    }
}
new F0();
gc();
const v15 = class extends F0 {
}
new v15();
