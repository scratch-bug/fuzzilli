function f0() {
    return f0;
}
class C1 extends f0 {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f8() {
            return f8;
        }
        function f9() {
            function f10() {
                return Array(3, f10).includes(3, C1);
            }
            return { next: f10 };
        }
        const v16 = Symbol.iterator;
        f8.bind(null, ...{ [v16]: f9 });
        return C1;
    }
    try { f6(); } catch (e) {}
}
new F2(f0, C1);
