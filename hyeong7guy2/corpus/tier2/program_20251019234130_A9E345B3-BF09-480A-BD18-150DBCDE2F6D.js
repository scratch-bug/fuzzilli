function f0() {
    class C3 extends Uint16Array {
    }
    class C4 extends C3 {
    }
    const t5 = Intl.DateTimeFormat;
    const v6 = t5();
    let v7;
    try { v7 = v6.formatToParts(C4); } catch (e) {}
    return v7;
}
({ construct: f0 }).construct();
