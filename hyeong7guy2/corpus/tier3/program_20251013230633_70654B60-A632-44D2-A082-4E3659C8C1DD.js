function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
try {
    const v7 = Symbol.iterator;
    function f8() {
        return v7;
    }
    for (let i10 = 0; i10 < 20000; i10++) {
        function f16() {
            return Symbol;
        }
    }
    for (let i18 = 0;
        (() => {
            const v19 = i18 < F0;
            const v20 = {};
            return v19;
        })();
        ++i18) {
    }
} catch(e24) {
}
