function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = this.constructor;
    try { new v3(); } catch (e) {}
    for (let v5 = 0; v5 < 5; v5++) {
        let v6 = 100000;
        const v8 = ~(v6++);
        const v9 = { value: v8 };
        function f10() {
            return f10;
        }
    }
}
new F0();
