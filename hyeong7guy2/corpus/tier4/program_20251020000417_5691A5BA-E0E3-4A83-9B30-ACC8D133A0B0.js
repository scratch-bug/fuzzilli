try {
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
    }
    F1.defineProperty = Array;
    const v7 = new Proxy([2.4108082532991067e+307], F1);
    Object.seal(v7);
} catch(e10) {
}
