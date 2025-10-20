function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this.constructor;
    try { new v5(); } catch (e) {}
}
const v7 = new F1(233, 233);
v7.b = v7;
const v8 = {};
v8.h = 233;
for (let i12 = (() => {
        function F9() {
            if (!new.target) { throw 'must be called with new'; }
        }
        return 0;
    })();
    i12 < 20000;
    i12++) {
    const v20 = i12 % 2 ? v7 : v8;
    v20.h = v20;
    v20.f = v20;
    v20.toISOString = v7;
}
