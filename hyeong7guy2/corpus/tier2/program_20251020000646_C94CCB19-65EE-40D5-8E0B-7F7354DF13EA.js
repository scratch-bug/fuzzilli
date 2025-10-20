const v2 = (129).constructor;
const v3 = new v2(v2);
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    a6.valueOf = Date;
    function f8() {
        const v9 = { a: a6 };
        const t7 = JSON.stringify;
        t7(v9);
        for (let i15 = 0, i16 = 10; i16; i16--) {
        }
        function f22(a23) {
        }
        return f22;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v24 = new F4(v3);
class C25 {
    static [v24](a27, a28, a29) {
    }
}
