function f0() {
    return f0;
}
function f1() {
    function f2(a3) {
        function f4(a5, a6) {
            return f4;
        }
        class C10 extends WeakMap {
            static {
                try { this.getMilliseconds(); } catch (e) {}
            }
        }
        const v13 = [f4,f4,f4,f4];
        v13.toJSON = f2;
        v13[1] = v13;
        Worker(f4, { type: "function", arguments: v13 });
        return a3;
    }
    return f2;
}
function f16(a17) {
    return f16;
}
Object.defineProperty(f0, Symbol.iterator, { configurable: true, enumerable: true, get: f1, set: f16 });
try { new Uint16Array(f0); } catch (e) {}
