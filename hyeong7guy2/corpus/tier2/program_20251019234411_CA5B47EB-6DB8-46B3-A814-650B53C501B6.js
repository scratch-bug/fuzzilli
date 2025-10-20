const v0 = {};
for (let i3 = 0, i4 = 10; i4; i4--) {
}
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    function f15() {
        function f16(a17) {
            const v20 = Symbol.iterator;
            const v37 = {
                [v20]() {
                    const v22 = [1024,257,1073741825,10,2147483649,27668,9223372036854775807,10,268435456,-624873012];
                    const v24 = v22["pop"]();
                    const v36 = {
                        [v0](a27, a28, a29, a30) {
                            const v33 = {
                                valueOf() {
                                    super[a28] = v22;
                                    return v24();
                                },
                            };
                        },
                        next() {
                            return { done: 10 };
                        },
                    };
                    return v36;
                },
            };
            const v40 = new Int16Array();
            new Date(WeakSet, Date, 882, ...v40, ...v37);
        }
        f16(a13);
        f16(F11);
        %OptimizeMaglevOnNextCall(f16);
        return f16;
    }
    Object.defineProperty(this, "toString", { get: f15 });
}
const v44 = new F11();
class C45 {
    static [v44](a47, a48, a49) {
    }
}
for (let i52 = 0, i53 = 10; i53; i53--) {
}
