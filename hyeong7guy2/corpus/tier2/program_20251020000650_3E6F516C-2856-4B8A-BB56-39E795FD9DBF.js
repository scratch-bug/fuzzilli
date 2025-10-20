function f2() {
    return Symbol;
}
function f3() {
    function f4(a5) {
        async function f6(a7, a8) {
            for (let i11 = -54928, i12 = 10;
                (() => {
                    4096 == i11;
                    const v14 = {};
                    function F16() {
                        if (!new.target) { throw 'must be called with new'; }
                        this.d = -1024;
                    }
                    const v19 = new F16();
                    function F20(a22, a23, a24) {
                        if (!new.target) { throw 'must be called with new'; }
                        Object.defineProperty(this, "withCalendar", { writable: true, configurable: true, enumerable: true, value: -23399 });
                    }
                    const v25 = /(?<a>)/dusygmi;
                    const v26 = new F20();
                    v26.toJSON = v14;
                    const v27 = [v25,v19,v26];
                    const v30 = JSON.stringify({ c: v27 });
                    const v31 = JSON.parse;
                    v31.apply(JSON, [v30]);
                    return i12;
                })();
                i12--) {
            }
            await f6;
            return f4;
        }
        f6(f4, f6(f2, a5));
        %OptimizeFunctionOnNextCall(f6);
        return f6;
    }
    return f4;
}
function f42(a43) {
    return f2;
}
Object.defineProperty(f2, Symbol.iterator, { configurable: true, enumerable: true, get: f3, set: f42 });
try { new Uint16Array(f2); } catch (e) {}
