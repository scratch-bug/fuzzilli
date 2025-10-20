const v4 = Symbol.iterator;
const v19 = {
    [v4]() {
        with (d8) {
            function F7() {
                if (!new.target) { throw 'must be called with new'; }
                const v9 = this.constructor;
                v9[239];
                try { new v9(); } catch (e) {}
            }
            new F7();
            test.verifySourcePositions(F7);
        }
        const v18 = {
            next() {
                return { done: 10000 };
            },
        };
        return v18;
    },
};
const v21 = new Int16Array();
new Date(WeakSet, Date, -128, ...v21, ...v19);
