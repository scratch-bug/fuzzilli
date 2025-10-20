function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            class C7 {
            }
            function F8(a10) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v11 = [45812,-65536];
            for (let i13 = 0;
                (() => {
                    const v14 = F8 != v11;
                    v14 < v14;
                    v14 in C7;
                    return i13 < 20000;
                })();
                i13++) {
            }
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v22 = new F0();
class C23 {
    static [v22](a25, a26, a27) {
    }
}
