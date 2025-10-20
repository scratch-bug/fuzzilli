function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    let v2 = this;
    function f5() {
        function f6(a7) {
            let v8 = 1.1;
            ({"length":v2,...v8} = Uint16Array);
            const v10 = { ...v8, __proto__: null };
        }
        return f6;
    }
    Object.defineProperty(v2, "toString", { get: f5 });
}
const v11 = new F1(F1, F1);
class C12 {
    static [v11](a14, a15, a16) {
    }
}
