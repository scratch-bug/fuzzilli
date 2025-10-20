const v1 = Symbol.iterator;
const v3 = this.ReferenceError;
try { v3(v1); } catch (e) {}
function f5() {
    return this;
}
function f6() {
    const v8 = new Float64Array();
    v8.filter(f5);
    function f10() {
        return { done: true };
    }
    return { next: f10 };
}
const v14 = Symbol.iterator;
f5.bind(null, ...{ [v14]: f6 });
