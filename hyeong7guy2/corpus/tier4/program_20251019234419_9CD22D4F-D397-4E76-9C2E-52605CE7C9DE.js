for (let v0 = 0; v0 < 500; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        F1 != this;
    }
    new F1();
}
