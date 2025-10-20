const v1 = class {
}
class C2 extends v1 {
    constructor(a4, a5, a6, a7) {
        super();
        try {
            function F10() {
                if (!new.target) { throw 'must be called with new'; }
                const t8 = Temporal.Duration;
                new t8(3.0, -3, 0, a7, -3, 3.0, a4);
            }
            new F10();
        } catch(e16) {
        }
    }
}
new C2(v1);
