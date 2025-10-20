function f1() {
    return f1;
}
function f2() {
    function f3() {
        const v6 = Array(1048576);
        try { v6.find(); } catch (e) {}
        const t7 = [-2,-1,-536870912,3];
        t7.seconds >>= 8;
        gc();
        return { done: true };
    }
    return { next: f3 };
}
const v15 = Symbol.iterator;
const v16 = { [v15]: f2 };
try { f1.bind(null, ...v16); } catch (e) {}
