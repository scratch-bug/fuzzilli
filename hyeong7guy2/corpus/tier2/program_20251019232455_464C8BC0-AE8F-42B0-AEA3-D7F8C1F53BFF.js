const v1 = class {
}
function f2() {
    function f4() {
        return v1;
    }
    function f5() {
        function f6() {
            return {};
        }
        const v8 = { next: f6 };
        for (let [v10] of v8.next(f6, v8, f4, f6, f6)) {
        }
        return f5;
    }
    const v11 = Symbol.iterator;
    f4.bind(null, ...{ [v11]: f5 });
    return f5;
}
Object.defineProperty(v1, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f2 });
try { new Int32Array(v1); } catch (e) {}
