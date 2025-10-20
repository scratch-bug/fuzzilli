class C1 extends WeakSet {
}
let v2;
try { v2 = C1(); } catch (e) {}
const v3 = [v2,v2,v2,v2];
Object.defineProperty(v3, 0, { configurable: true, get: v2 });
v3["indexOf"]();
