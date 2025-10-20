function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v8 = [-5.0,4.0];
        const v11 = new Proxy(v8, {});
        return v11.pop();
    }
    f4();
    f4();
}
new F0();
