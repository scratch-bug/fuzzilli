const v1 = new Int8Array();
class C2 {
    valueOf(a4, a5, a6) {
        try { a5.every(); } catch (e) {}
        v1[2147483649] = this;
    }
}
const v8 = new C2();
try { v8.valueOf(); } catch (e) {}
