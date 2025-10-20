function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            let v8 = "number";
            for (let i10 = 0; i10 < 20000; i10++) {
                ({"e":f6,"h":a7,"length":v8,...i10} = "o");
                const v17 = { alphabet: "base64" };
                function F18(a20, a21) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                i10++;
            }
            return "o";
        }
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v23 = new F1();
class C24 {
    static [v23](a26, a27, a28) {
    }
    static [v23](a30, a31, a32) {
    }
}
