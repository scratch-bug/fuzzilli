function f2() {
    return f2;
}
function f3() {
    function f4(a5) {
        function f7() {
            return "object";
        }
        function F8() {
            if (!new.target) { throw 'must be called with new'; }
        }
        F8.firstDayOfWeek = 0;
        class C10 extends F8 {
        }
        const v12 = Intl.Locale;
        v12[Symbol.toPrimitive] = f7;
        new v12(v12, C10);
        return Intl;
    }
    return f4;
}
function f15(a16) {
    return a16;
}
Object.defineProperty(f2, Symbol.iterator, { configurable: true, enumerable: true, get: f3, set: f15 });
try { new Uint16Array(f2); } catch (e) {}
