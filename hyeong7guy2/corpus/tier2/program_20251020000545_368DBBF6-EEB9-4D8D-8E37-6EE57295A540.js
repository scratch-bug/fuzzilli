function f0() {
    return f0;
}
class C1 extends f0 {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            return f7;
        }
        function f10() {
            return f0;
        }
        function f11() {
            function f12() {
                const v14 = Array(3);
                v14.pop();
                v14.includes(v14.push(3), C1);
                return { done: true };
            }
            return { next: f12 };
        }
        const v22 = Symbol.iterator;
        f10.bind(null, ...{ [v22]: f11 });
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v26 = new F2();
v26.toString();
