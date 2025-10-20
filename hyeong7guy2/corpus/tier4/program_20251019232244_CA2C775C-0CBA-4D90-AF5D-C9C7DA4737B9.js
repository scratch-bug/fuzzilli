class C1 {
    static get g() {
        this.__proto__ = null;
    }
}
try { C1.g(); } catch (e) {}
new C1();
