const v4 = Symbol.iterator;
const v30 = {
    [v4]() {
        const v8 = Symbol.iterator;
        const v20 = {
            [v8]() {
                const v11 = Object();
                const v12 = Object.setPrototypeOf(Object, v11);
                try { new v12(16); } catch (e) {}
                const v14 = v12.getPrototypeOf(v11);
                const v15 = v14?.__defineSetter__;
                try { new v15(v11, 16); } catch (e) {}
                const v19 = {
                    next() {
                        const v18 = { done: v14 };
                        v18.done = v18;
                        return v18;
                    },
                };
                return v19;
            },
        };
        function f22() {
            new Date(WeakSet, Date, 882, ...v20, ...v20);
            return Date;
        }
        f22.call(882, Date, WeakSet);
        f22();
        %OptimizeFunctionOnNextCall(f22);
        f22();
        const v29 = {
            next() {
                return { done: 10 };
            },
        };
        return v29;
    },
};
const v33 = new Int16Array();
v33.copyWithin(WeakMap, v30);
function f35() {
    const v36 = new Date(Symbol, Date, 882, ...v33, ...v30);
    return v36;
}
f35();
%PrepareFunctionForOptimization(f35);
%OptimizeFunctionOnNextCall(f35);
f35();
