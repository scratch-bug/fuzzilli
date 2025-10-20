[-902];
[-1073741824,-806537047,23239757,-128,6];
new WeakSet();
function f7() {
    return 268435456;
}
new Int16Array(10);
const v13 = Symbol.iterator;
const v22 = {
    [v13]() {
        let v15 = 10;
        const v21 = {
            next() {
                v15--;
                const v19 = v15 == 0;
                return { done: v19, value: v15 };
            },
        };
        return v21;
    },
};
class C23 {
    #toString(a25, a26, a27, a28) {
        delete a28?.[268435456];
        return 4;
    }
    static [-11](a31, a32, a33) {
        return a31;
    }
}
new C23();
new C23();
new C23();
function F38(a40, a41) {
    if (!new.target) { throw 'must be called with new'; }
    function f42(a43, a44, a45) {
        function f46() {
            return F38;
        }
        function f47() {
            function f48() {
                gc();
                return { done: true };
            }
            return { next: f48 };
        }
        const v54 = Symbol.iterator;
        f46.bind(null, ...{ [v54]: f47 });
        function F58(a60, a61, a62, a63) {
            if (!new.target) { throw 'must be called with new'; }
            class C66 extends Array {
                static {
                    new this();
                    const v69 = {
                        call: Array,
                        construct: f42,
                        deleteProperty: f42,
                        getOwnPropertyDescriptor: Symbol,
                        getPrototypeOf: Symbol,
                        isExtensible: Symbol,
                        set: Symbol,
                        setPrototypeOf: Symbol,
                    };
                    new Proxy(Array, v69);
                }
                set f(a73) {
                    %PretenureAllocationSite(this);
                }
                #m(a75, a76, a77) {
                    return v54;
                }
            }
            new Uint8Array(F58, Map, arguments, ...arguments);
        }
        new F58();
        return F38;
    }
    f42(this, a41, Symbol);
    %OptimizeFunctionOnNextCall(f42);
}
const v83 = new F38();
const v84 = new F38(F38, v83);
const t82 = v84.constructor;
new t82();
