function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        function f6() {
            const v7 = { a: a4 };
            v7.d = a4;
            const t7 = JSON.stringify;
            t7(v7);
            for (let i13 = 0, i14 = 10; i14; i14--) {
            }
            function f20(a21) {
            }
            return f20;
        }
        Object.defineProperty(this, "toString", { get: f6 });
    }
    const v22 = new F2();
    class C23 {
        static [v22](a25, a26, a27) {
        }
    }
}
new F0();
new F0();
for (let i32 = 0, i33 = 10; i33; i33--) {
}
