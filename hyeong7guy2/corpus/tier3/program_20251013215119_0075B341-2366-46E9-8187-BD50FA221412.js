class C1 {
}
C1[Symbol.iterator] = Symbol;
try { new Int32Array(C1); } catch (e) {}
