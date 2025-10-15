function F0() {
    if (!new.target) { throw 'must be called with new'; }
    class C3 {
    }
    function F4(a6, a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        const v10 = this.constructor;
        try { new v10(C3, C3, a6, a6); } catch (e) {}
        a8[35145] = a8;
    }
    new F4(C3, C3, C3);
}
new F0();
for (let v15 = 0; v15 < 250; v15++) {
}
