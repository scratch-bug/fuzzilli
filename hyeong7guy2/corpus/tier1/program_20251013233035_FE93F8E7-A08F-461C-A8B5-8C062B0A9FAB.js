class C0 {
}
class C1 extends C0 {
}
const v3 = new Date();
function f4(a5, a6) {
    return C1;
}
v3.toString = f4;
function f9() {
    for (let v10 = 0; v10 < 5; v10++) {
        function f13() {
            return Array;
        }
        function f14() {
            function f15() {
                Array(1048576);
                return { done: true };
            }
            return { next: f15 };
        }
        const v21 = Symbol.iterator;
        f13.bind(null, ...{ [v21]: f14 });
    }
    return C1;
}
WeakSet.constructor = f9;
const t27 = WeakSet.constructor;
t27(C0, 13n);
const v27 = { [v3]: 13n };
