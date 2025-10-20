const v4 = Symbol.iterator;
const v25 = {
    [v4]() {
        function f6(a7, a8, a9) {
            function f12(a13, a14) {
                for (let v16 = 0; v16 < 5; v16++) {
                    switch (1000000000000.0) {
                        case 127:
                            break;
                        case WeakSet:
                            break;
                        default:
                            break;
                        case v16:
                            break;
                    }
                }
            }
            Set[Symbol] = f12;
        }
        new Worker(f6, { type: "function" });
        const v24 = {
            next() {
                return { done: 10 };
            },
        };
        return v24;
    },
};
const v27 = new Int16Array(882);
function f28() {
    new Date(WeakSet, Date, 882, ...v27, ...v25);
}
f28();
f28();
