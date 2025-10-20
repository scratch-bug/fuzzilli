const t0 = this.ReferenceError;
const v3 = t0();
function f4() {
    return this;
}
function f5() {
    try { new Float64Array(this); } catch (e) {}
    function f8() {
        const v9 = { done: v3 };
        v9.done;
        return v9;
    }
    new f8();
    return { next: f8 };
}
const v13 = Symbol.iterator;
f4.bind(null, ...{ [v13]: f5 });
