function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        return ("🙌🏿").includes("🙌🏿");
    }
    ({ construct: f4 }).construct();
    const v9 = this.constructor;
    try { new v9(); } catch (e) {}
}
new F0(F0, F0);
