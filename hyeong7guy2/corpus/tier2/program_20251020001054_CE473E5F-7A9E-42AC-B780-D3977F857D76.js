function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = -1098098658;
            function f10() {
                return F0;
            }
            Object.defineProperty(arguments, 0, { get: f10 });
            let v11 = 30349n;
            ({"b":v11,"e":v7,...Int32Array} = arguments);
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v12 = new F0(F0, F0);
class C13 {
    static [v12](a15, a16, a17) {
    }
}
