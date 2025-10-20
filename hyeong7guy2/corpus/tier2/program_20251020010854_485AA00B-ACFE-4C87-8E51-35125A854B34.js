new Uint16Array();
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i9 = 0, i10 = 10; i10; i10--) {
    }
    function f16(a17) {
        function f18() {
            gc();
        }
        const v21 = { construct: f18 };
        v21.construct(v21, F3, this, a17);
        return a5;
    }
    this[Symbol.toPrimitive] = f16;
}
const t15 = Array(1048576);
t15.length %= 168;
const v28 = new F3();
class C29 {
    static [v28](a31, a32, a33) {
    }
}
