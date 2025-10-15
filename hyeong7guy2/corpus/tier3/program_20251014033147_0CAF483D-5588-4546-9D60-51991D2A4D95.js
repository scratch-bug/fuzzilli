class C0 {
    constructor(a2) {
        const t2 = a2.constructor;
        t2();
        const v6 = a2.prototype.constructor;
        try { new v6(a2); } catch (e) {}
    }
}
new C0(C0);
