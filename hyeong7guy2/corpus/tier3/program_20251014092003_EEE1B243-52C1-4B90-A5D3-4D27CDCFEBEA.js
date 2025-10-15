class C0 {
    n(a2, a3) {
        C0 = a3;
    }
}
const v4 = new C0();
const v5 = v4.constructor;
const v6 = new v5(v4, v5, C0);
try { v6.n(); } catch (e) {}
Temporal.Now.timeZoneId();
