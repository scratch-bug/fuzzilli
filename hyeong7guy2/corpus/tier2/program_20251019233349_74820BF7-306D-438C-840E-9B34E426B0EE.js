function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 268435456;
}
const v9 = Symbol.iterator;
const v18 = {
    [v9]() {
        function f12() {
            return F1;
        }
        Object.defineProperty(d8, "Int32Array", { get: f12 });
        with (d8) {
            test.verifySourcePositions(Int32Array);
        }
        const v17 = {
            next() {
                return { done: Uint16Array };
            },
        };
        return v17;
    },
};
const v20 = new Int16Array();
new Date(WeakSet, Date, -128, ...v20, ...v18);
