const v7 = Symbol.iterator;
const v15 = {
    [v7]() {
        d8.Int32Array = 536870888;
        with (d8) {
            try { test.verifySourcePositions(Int32Array); } catch (e) {}
        }
        const v14 = {
            next() {
                return { done: Uint16Array };
            },
        };
        return v14;
    },
};
const v17 = new Int16Array();
new Date(WeakSet, Date, -128, ...v17, ...v15);
