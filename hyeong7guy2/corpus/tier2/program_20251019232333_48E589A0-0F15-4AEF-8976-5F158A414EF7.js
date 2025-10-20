const v1 = [8];
function f5() {
    return v1;
}
function f6() {
    function f7(a8) {
        function f9() {
            return f6;
        }
        function f10() {
            const v12 = [Map,1];
            const v13 = v1.indexOf;
            Reflect.apply(v13, v13, v12);
            return f9;
        }
        const v15 = Symbol.iterator;
        const v16 = { [v15]: f10 };
        f9.bind(null, ...v16);
        return v16;
    }
    return f7;
}
function f19(a20) {
    return a20;
}
Object.defineProperty(f5, Symbol.iterator, { configurable: true, enumerable: true, get: f6, set: f19 });
try { new Uint8Array(f5); } catch (e) {}
