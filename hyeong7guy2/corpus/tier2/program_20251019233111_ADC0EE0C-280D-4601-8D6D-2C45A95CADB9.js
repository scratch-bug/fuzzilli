function f2(a3) {
    return a3;
}
Object.defineProperty(WeakMap, Symbol.iterator, { set: f2 });
class C6 extends WeakMap {
}
function* f7(a8, a9) {
    yield* "valueOf";
    yield* C6;
    return f7;
}
const v10 = f7();
let v11;
try { v11 = v10.toArray(); } catch (e) {}
%OptimizeMaglevOnNextCall(f7);
f7(v11, v11);
