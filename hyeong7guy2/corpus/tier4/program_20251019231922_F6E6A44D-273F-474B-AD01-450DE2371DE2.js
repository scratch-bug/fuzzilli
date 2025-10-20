function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
        function f4(a5) {
            const v6 = { ...this };
            return this;
        }
        for (let v7 = 0; v7 < 10; v7++) {
            new f4();
        }
    }
    new F2();
}
new F0();
new F0();
new F0();
class C13 extends F0 {
}
new C13();
new C13();
