const v1 = Symbol.iterator;
class C2 {
}
const v3 = class {
}
class C4 {
    #d;
    constructor(a6, a7, a8, a9) {
        try {
            v3.#d = this;
        } catch(e10) {
            function f11(a12, a13) {
                try { a12(); } catch (e) {}
                function F15(a17, a18) {
                    if (!new.target) { throw 'must be called with new'; }
                    a17.d = a17;
                }
                const v19 = new F15(f11);
                const t18 = v19.constructor;
                new t18(a13);
                return v3;
            }
            f11(f11, a7);
        }
    }
}
try { new C4(C2, v1); } catch (e) {}
