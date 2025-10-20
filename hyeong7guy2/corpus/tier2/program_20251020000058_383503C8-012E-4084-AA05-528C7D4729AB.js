function f0() {
}
const v1 = [12,-11,-9223372036854775808,-268435456];
Object.defineProperty(v1, "toString", { configurable: true, enumerable: true, value: f0 });
v1.monthCode = v1;
function f2() {
    return v1;
}
function f3() {
    function f4(a5) {
        function f7(a8, a9) {
            Temporal.PlainYearMonth.from(v1);
            return f7;
        }
        Object.defineProperty(Worker, Symbol.toPrimitive, { configurable: true, enumerable: true, value: f7 });
        const v19 = {
            [Worker](a16, a17, a18) {
            },
        };
        return Symbol;
    }
    return f4;
}
function f20(a21) {
    return f3;
}
Object.defineProperty(f2, Symbol.iterator, { configurable: true, enumerable: true, get: f3, set: f20 });
try { new Uint16Array(f2); } catch (e) {}
