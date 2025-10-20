function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        for (let i9 = 0;
            (() => {
                const v11 = i9 < 20000;
                for (let v12 = 0; v12 < 5; v12++) {
                    return v11;
                    function f13() {
                        return a5;
                    }
                }
                return v11;
            })();
            i9++) {
        }
        return a6;
    }
    f4();
}
new F0();
