const v0 = [1000000000.0,-0.5475398524313455,0.6655495892435533,991.1207344815602,-0.0,NaN,-1.0,0.26433626109289776,243.1838806581734,-670034.563506634];
function f2() {
    return v0;
}
Symbol.toString = f2;
const v4 = class {
}
function f5() {
    const v7 = Temporal.ZonedDateTime;
    const v9 = { timeZone: "-22:00" };
    const v10 = {};
    v10.offset = Symbol;
    return v7.from(v9, v10);
}
Object.defineProperty(v4, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f5 });
try { new Int32Array(v4); } catch (e) {}
