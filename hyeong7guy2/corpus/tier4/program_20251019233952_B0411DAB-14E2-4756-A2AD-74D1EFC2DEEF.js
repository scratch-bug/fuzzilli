function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = this.constructor;
    try { new v6(); } catch (e) {}
    const v8 = new Date("und🤯efined");
    function f9() {
        parseInt("und🤯efined");
        return a4;
    }
    v8.valueOf = f9;
    v8.setUTCHours(v8);
}
new F2();
