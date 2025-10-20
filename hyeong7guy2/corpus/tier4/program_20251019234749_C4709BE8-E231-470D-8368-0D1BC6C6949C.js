function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = new Date();
    function f7() {
        parseInt("und🤯efined", 16);
        return a4;
    }
    v6.valueOf = f7;
    v6.setUTCHours(v6);
}
new F1("und🤯efined", "und🤯efined");
