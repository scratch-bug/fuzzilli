function f1() {
    return f1;
}
function f2() {
    function f3() {
        function f5(a6, a7) {
            using v9 = {};
            return v9;
        }
        try { f5(); } catch (e) {}
        return { done: true };
    }
    return { next: f3 };
}
const v13 = Symbol.iterator;
f1.bind(null, ...{ [v13]: f2 });
