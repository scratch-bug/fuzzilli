function f0() {
    return f0;
}
class C1 extends f0 {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            return a4;
        }
        function f10() {
            return f10;
        }
        function f11() {
            function f12() {
                const v14 = Array(3);
                v14.includes(v14.push(3), C1);
                return { done: true };
            }
            return { next: f12 };
        }
        const v21 = Symbol.iterator;
        f10.bind(null, ...{ [v21]: f11 });
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v25 = new F2();
v25.toString();
