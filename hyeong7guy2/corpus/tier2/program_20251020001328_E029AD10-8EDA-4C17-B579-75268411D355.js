function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            return a3;
        }
        function f8(a9) {
            for (let i11 = 0;
                i11 < 10000;
                (() => {
                    const v16 = Array();
                    v16.push(Uint32Array);
                    v16.push(f6);
                    i11++;
                })()) {
            }
            return Uint32Array;
        }
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v21 = new F1();
v21.toString();
