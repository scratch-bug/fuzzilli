const v2 = class {
}
function f3() {
    const v4 = [Int32Array,Int32Array,Int32Array,Int32Array];
    function f5() {
        function f7() {
            function f8() {
                Error().stack;
            }
            return { next: f8 };
        }
        const v13 = Symbol.iterator;
        Date.bind(null, ...{ [v13]: f7 });
        return Symbol;
    }
    function f17(a18) {
        return a18;
    }
    Object.defineProperty(v4, "valueOf", { configurable: true, enumerable: true, get: f5, set: f17 });
    v4.length = v4;
    return Symbol;
}
try { f3(); } catch (e) {}
Object.defineProperty(v2, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f3 });
try { new Int32Array(v2); } catch (e) {}
