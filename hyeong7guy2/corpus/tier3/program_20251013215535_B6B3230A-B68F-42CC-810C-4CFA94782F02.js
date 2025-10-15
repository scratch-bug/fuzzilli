class C0 {
    static toString(a2) {
        function f3(a4) {
            return a2;
        }
        class C5 extends f3 {
            static #valueOf(a7, a8) {
                a7.#valueOf();
            }
        }
    }
}
class C10 {
}
const v11 = C10.__defineGetter__;
try { new v11(); } catch (e) {}
