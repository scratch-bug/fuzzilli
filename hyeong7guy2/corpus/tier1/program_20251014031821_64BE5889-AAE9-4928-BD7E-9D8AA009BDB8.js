for (let v2 = 0; v2 < 5; v2++) {
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        this.g = a6;
        this.b = a6;
    }
    new F3(2, v2);
    new F3(v2, 4294967295);
}
