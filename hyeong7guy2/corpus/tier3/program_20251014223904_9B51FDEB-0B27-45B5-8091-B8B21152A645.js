class C0 {
    toString(a2, a3, a4, a5) {
        const v7 = Temporal.PlainTime;
        const v9 = { minute: 62 };
        v7.from(v9, { overflow: "reject" });
    }
}
const v13 = new C0();
const v15 = new Date();
try { v15.setFullYear(v13); } catch (e) {}
