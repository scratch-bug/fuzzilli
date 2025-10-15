function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = a2.length;
    function f5() {
        function f6(a7) {
            const v9 = eval.bind;
            let v10;
            try { v10 = v9.call(v4); } catch (e) {}
            return v10;
        }
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v11 = new F0(F0);
class C12 {
    static [v11](a14, a15, a16) {
    }
}
