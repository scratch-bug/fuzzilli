function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F7() {
                if (!new.target) { throw 'must be called with new'; }
            }
            function f9(a10, a11) {
                const v13 = {};
                v13.ownKeys = f4;
                const v15 = new Proxy(Object, v13);
                return v15.entries(v15);
            }
            F7.constructor = f9;
            class C17 extends F7 {
                static {
                    class C20 extends this.constructor {
                    }
                    new C20();
                }
            }
            return C17;
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v22 = new F0(F0, F0);
try { v22.toString(v22, F0, F0, v22); } catch (e) {}
