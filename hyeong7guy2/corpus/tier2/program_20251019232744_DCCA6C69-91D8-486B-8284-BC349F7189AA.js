const v1 = (129).constructor;
const v2 = new v1(v1, v1);
v2.toJSON = v2;
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        const v8 = { a: a5 };
        const t7 = JSON.stringify;
        const v11 = t7(v8);
        try { v11.replaceAll(this); } catch (e) {}
        for (let i15 = 0, i16 = 10; i16; i16--) {
        }
        function f22(a23) {
            return a6;
        }
        return f22;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v24 = new F3(v2);
class C25 {
    static [v24](a27, a28, a29) {
    }
}
for (let i32 = 0, i33 = 10; i33; i33--) {
}
