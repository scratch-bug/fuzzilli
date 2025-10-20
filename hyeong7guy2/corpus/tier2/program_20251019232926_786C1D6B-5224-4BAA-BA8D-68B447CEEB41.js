try {
    for (let i1 = 0;
        (() => {
            const v3 = i1 < 20000;
            function F4(a6, a7) {
                if (!new.target) { throw 'must be called with new'; }
                function f8() {
                    return this;
                }
                try { f8(v3); } catch (e) {}
            }
            for (let v10 = 0; v10 < 5; v10++) {
                F4.d >>>= 100000;
            }
            return v3;
        })();
        i1++) {
    }
} catch(e15) {
}
