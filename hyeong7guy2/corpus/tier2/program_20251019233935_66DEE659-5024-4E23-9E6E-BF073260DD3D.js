const v3 = Symbol.iterator;
const v20 = {
    [v3]() {
        for (let v5 = 0; v5 < 25; v5++) {
            let v7 = 32;
            v7++;
            const v9 = 2 ** v7;
            const v11 = new Uint8Array();
            v11[v9] = 1;
        }
        const v16 = {
            next() {
                return { done: 39000 };
            },
        };
        try {
            super.keys();
        } catch(e19) {
        }
        this.__proto__ = Math;
        return v16;
    },
};
function f22() {
    const v23 = new Date(WeakSet, Date, 882, ...v20, ...v20);
    return v23;
}
f22();
f22.call();
%OptimizeFunctionOnNextCall(f22);
f22();
