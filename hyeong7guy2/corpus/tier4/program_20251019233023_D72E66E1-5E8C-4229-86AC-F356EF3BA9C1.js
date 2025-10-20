function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7, a8, a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        const v12 = {
            [100000]() {
            },
        };
        Object.freeze(v12);
    }
    new F5();
}
const v16 = new F1(100000, F1);
const t13 = v16.constructor;
new t13();
