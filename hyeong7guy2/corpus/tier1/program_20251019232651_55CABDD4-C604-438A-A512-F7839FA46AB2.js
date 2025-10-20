function f1() {
}
function f2() {
    function f3(a4) {
        const v6 = Symbol.iterator;
        const v28 = {
            [v6]() {
                const v10 = Symbol.iterator;
                const v18 = {
                    [v10]() {
                        const v13 = Object();
                        const v17 = {
                            next() {
                                try { this.next(); } catch (e) {}
                                return { done: v13 };
                            },
                        };
                        return v17;
                    },
                };
                function f20() {
                    new Date(WeakSet, Date, 882, ...v18, ...v18);
                    return Date;
                }
                const v22 = f20.call();
                try { new v22(v18, Date, v18, v18, v6); } catch (e) {}
                f20();
                const v27 = {
                    next() {
                        const v26 = { done: 10 };
                    },
                };
                return v27;
            },
        };
        const v31 = new Int16Array();
        new Date(Symbol, Date, 882, ...v31, ...v28);
    }
    return f3;
}
function f33(a34) {
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f33 });
try { new Uint16Array(f1); } catch (e) {}
