try {
    for (let i1 = 0; i1 < 100000; ++i1) {
        const v12 = {
            m(a8, a9, a10, a11) {
                return i1;
            },
        };
    }
    const v13 = [];
    function F14(a16) {
        if (!new.target) { throw 'must be called with new'; }
    }
    Object.defineProperty(F14, 8, { configurable: true, value: v13 });
} catch(e17) {
}
