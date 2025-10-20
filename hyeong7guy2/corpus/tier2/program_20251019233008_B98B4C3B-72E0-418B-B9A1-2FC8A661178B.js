const v1 = {};
const v28 = {
    getOwnPropertyDescriptor(a3, a4) {
        for (let i7 = 0, i8 = 10;
            i8;
            (() => {
                i8--;
                function f14() {
                    function f15() {
                        Error().stack;
                        return { done: true };
                    }
                    return { next: f15 };
                }
                const v22 = Symbol.iterator;
                Date.bind(null, ...{ [v22]: f14 });
            })()) {
        }
    },
};
const v29 = new Proxy(v1, v28);
v29.__lookupGetter__();
