const v0 = [6,2,1848974791,9007199254740991];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    function F3() {
        if (!new.target) { throw 'must be called with new'; }
        eval();
        for (let i8 = 0; i8 < 10000; ++i8) {
        }
        this.c = v0;
    }
    new F3();
}
new F1();
