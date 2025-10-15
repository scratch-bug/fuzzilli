function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
    constructor(a4, a5) {
        super();
        function F6(a8, a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
        }
        new F6();
        for (let v13 = 0; v13 < 500; v13++) {
            v13 < 20000;
            v13++;
        }
    }
}
