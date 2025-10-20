try {
    function F1(a3, a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        const v6 = this.constructor;
        try { new v6(); } catch (e) {}
        a5 === false;
    }
    new F1();
    new F1();
} catch(e11) {
}
