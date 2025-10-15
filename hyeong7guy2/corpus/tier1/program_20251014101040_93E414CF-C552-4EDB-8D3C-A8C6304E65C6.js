function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = new Int8Array();
    function f4(a5) {
        for (let i7 = 0;
            i7 < 25000;
            (() => {
                for (let v11 = 0; v11 < 5; v11++) {
                    v11 | i7;
                }
                ++i7;
            })()) {
        }
        return a5;
    }
    Object.defineProperty(v3, "valueOf", { configurable: true, enumerable: true, value: f4 });
    v3[8] = v3;
}
new F0();
