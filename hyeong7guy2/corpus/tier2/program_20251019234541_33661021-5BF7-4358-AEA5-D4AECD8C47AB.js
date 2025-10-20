const v4 = Symbol.iterator;
const v12 = {
    [v4]() {
        const v11 = {
            next() {
                const v7 = [WeakSet,WeakSet,WeakSet,WeakSet,WeakSet];
                function f8(a9) {
                    return f8;
                }
                Object.defineProperty(v7, "constructor", { get: Uint32Array, set: f8 });
                v7.concat(this);
                return v7;
            },
        };
        return v11;
    },
};
const v15 = new Int16Array();
try { new Date(WeakSet, Date, 882, ...v15, ...v12); } catch (e) {}
