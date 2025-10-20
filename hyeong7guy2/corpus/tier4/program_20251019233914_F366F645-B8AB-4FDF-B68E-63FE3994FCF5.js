class C0 {
}
const v1 = C0.__lookupGetter__;
try { new v1(); } catch (e) {}
class C3 extends C0 {
}
class C4 extends C3 {
    static get c() {
        for (let v6 = 0; v6 < 5; v6++) {
            break;
        }
    }
}
