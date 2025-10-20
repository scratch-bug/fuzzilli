function f2() {
    return 4096;
}
function f3() {
    function f4(a5) {
        async function f6(a7, a8) {
            for (let [i12, i13] = (() => {
                    function f11() {
                        return f6;
                    }
                    return [-54928, 10];
                })();
                (() => {
                    if (4096 == i12) {
                        function F15(a17, a18, a19, a20) {
                            if (!new.target) { throw 'must be called with new'; }
                        }
                    }
                    return i13;
                })();
                i13--) {
            }
            return await f6;
        }
        f6(f6(f4, f4), f4);
        %OptimizeFunctionOnNextCall(f6);
        return f4;
    }
    return f4;
}
function f29(a30) {
    return a30;
}
Object.defineProperty(f2, Symbol.iterator, { configurable: true, enumerable: true, get: f3, set: f29 });
try { new Uint16Array(f2); } catch (e) {}
