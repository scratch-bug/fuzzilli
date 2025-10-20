function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = class extends F1 {
    constructor(a6, a7) {
        super();
        function f8(a9, a10) {
            new Float64Array(536870912);
        }
        f8();
    }
}
new v4();
function f17() {
}
function f18() {
    function f19() {
        const v22 = Array(1048576);
        try { Array.from(...v22, Array, f19, 1048576, Array, f19); } catch (e) {}
        gc(6);
        return { done: true };
    }
    return { next: f19 };
}
const v30 = Symbol.iterator;
f17.bind(null, ...{ [v30]: f18 });
