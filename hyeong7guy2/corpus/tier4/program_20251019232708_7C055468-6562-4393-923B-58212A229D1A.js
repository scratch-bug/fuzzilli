function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this.constructor;
    let v6;
    try { v6 = new v5(); } catch (e) {}
    function f7(a8, a9, a10) {
        let v11 = -1098098658;
        v11--;
        eval(-(v11 + v11));
        return v11;
    }
    f7(v6, eval, F1);
}
new F1();
