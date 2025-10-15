try {
    for (let i1 = 0;
        (() => {
            const v3 = i1 < 20000;
            function F4(a6, a7) {
                if (!new.target) { throw 'must be called with new'; }
            }
            for (let v8 = 0; v8 < 5; v8++) {
                F4.d >>>= 100000;
            }
            return v3;
        })();
        i1++) {
    }
} catch(e13) {
}
