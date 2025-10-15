[-2,1,4,536870888,-4,58932,8936];
class C7 extends Date {
}
const v9 = Symbol.iterator;
const v34 = {
    [v9]() {
        function F11(a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
        }
        for (let i17 = 0;
            (() => {
                const v19 = i17 < 1000;
                v19 instanceof F11;
                return v19;
            })();
            i17++) {
        }
        function F25(a27, a28, a29) {
            if (!new.target) { throw 'must be called with new'; }
        }
        F25[0] <<= 64;
        const v33 = {
            next() {
                return { done: 10 };
            },
        };
        return v33;
    },
};
const v37 = new Int16Array();
function f39() {
}
function f40() {
    new Date(WeakSet, Date, 882, ...v37, ...v34);
}
f39[Symbol.toPrimitive] = f40;
for (const v63 in [0,97,115,109,1,0,0,0,1,4,-14,96,0,0,2,7]) {
    v63.propertyIsEnumerable(f39);
}
