function f0() {
    return f0;
}
class C2 extends WeakMap {
}
Object.defineProperty(C2, "valueOf", { writable: true, enumerable: true, value: f0 });
C2["valueOf"]();
C2.__proto__ = Symbol;
for (const v6 in C2) {
}
