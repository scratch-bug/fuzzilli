function f1() {
    return Symbol;
}
function f2() {
    function f3() {
        const v5 = Array(Array);
        const v7 = Array(1048576);
        try { Array.from(...v7, Array, f3, 1048576, v5, f3); } catch (e) {}
        gc(6);
    }
    try { f3.apply(); } catch (e) {}
    return { next: f3 };
}
const v14 = Symbol.iterator;
const v15 = { [v14]: f2 };
try { f1.bind(null, ...v15); } catch (e) {}
