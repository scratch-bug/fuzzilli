Date.toString = Symbol;
const v2 = Date.toString();
class C3 {
    static {
        function f5(a6) {
            v2.valueOf = a6;
            return Symbol;
        }
        try { f5(); } catch (e) {}
    }
}
