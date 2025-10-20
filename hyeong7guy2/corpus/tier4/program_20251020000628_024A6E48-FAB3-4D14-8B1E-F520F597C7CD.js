function F1() {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = ({}).constructor;
    class C5 extends v4 {
        constructor(a7, a8) {
            for (let i11 = (() => {
                    for (const v10 in v4) {
                        this.b ^= -1024;
                    }
                    return 1;
                })();
                i11 < 20000;
                ++i11) {
            }
            super();
        }
    }
    new C5();
}
new F1();
