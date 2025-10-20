class C1 {
}
function f2() {
    function f3() {
        const v4 = `
            const v5 = {};
            try { v5(); } catch (e) {}
        `;
        eval(v4);
    }
    return f3;
}
function f9(a10) {
    return a10;
}
Object.defineProperty(C1, "toString", { configurable: true, enumerable: true, get: f2, set: f9 });
class C11 {
    static [C1](a13, a14, a15) {
    }
}
try { new BigInt64Array(Int16Array); } catch (e) {}
