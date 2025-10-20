function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            let v8 = "1000";
            for (let v9 = 0; v9 < 5; v9++) {
                ({"e":f6,"h":a7,"length":v8,...v9} = "o");
                v9++;
                +v9;
            }
            return a7;
        }
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v12 = new F1(F1, "o");
class C13 {
    static [v12](a15, a16, a17) {
    }
    static [v12](a19, a20, a21) {
    }
}
