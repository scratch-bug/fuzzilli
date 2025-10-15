function f2() {
    return f2;
}
function f3(a4) {
    return f2;
}
f3.toString = f3;
Date[Symbol.toPrimitive] = f2;
class C7 extends Date {
}
try { C7.parse(f3); } catch (e) {}
const v10 = class extends BigInt64Array {
}
const v11 = new v10();
class C13 {
    constructor(a15, a16) {
        const v17 = this.constructor;
        v11[a15] = C13;
        try { new v17(a16, 9); } catch (e) {}
    }
}
function f19() {
    return f2;
}
function f20(a21) {
    return a21;
}
Object.defineProperty(C13, Symbol.toPrimitive, { enumerable: true, get: f19, set: f20 });
new C13();
const v24 = new C7();
try { v24.setUTCSeconds(532112.804617661, Date); } catch (e) {}
