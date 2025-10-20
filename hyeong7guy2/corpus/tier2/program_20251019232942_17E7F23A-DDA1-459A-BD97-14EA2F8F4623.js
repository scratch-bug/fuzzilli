const v1 = [-1.0,237.39936841105464];
v1[4] = -968369.2591468543;
function f3() {
    return f3;
}
function f4() {
    function f5() {
        function F6() {
            if (!new.target) { throw 'must be called with new'; }
            const v8 = { done: v1 };
            const t10 = JSON.stringify;
            t10(v8);
            for (let i14 = 0, i15 = 10; i15; i15--) {
            }
        }
        new F6();
        return { done: true };
    }
    return { next: f5 };
}
const v25 = Symbol.iterator;
f3.bind(null, ...{ [v25]: f4 });
