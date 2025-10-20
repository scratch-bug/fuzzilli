new WeakMap();
function f3() {
}
function f4() {
    function f5() {
        const v8 = Array(1048576);
        try { Array.from(...v8, Array, f5, 1048576, Array, f5); } catch (e) {}
        const v13 = gc(6);
        v13 ?? v13;
        return { done: true };
    }
    return { next: f5 };
}
const v17 = Symbol.iterator;
f3.bind(null, ...{ [v17]: f4 });
