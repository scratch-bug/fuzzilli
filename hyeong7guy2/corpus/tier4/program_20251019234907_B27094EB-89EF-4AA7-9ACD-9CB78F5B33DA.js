function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = this.constructor;
    try { new v6(); } catch (e) {}
    this.b = F0;
}
const v8 = new F2();
for (let [i12, i13] = (() => {
        const v11 = { ...v8 };
        return [0, 10];
    })();
    i13;
    i13--) {
}
