Uint8Array.toString = Symbol;
class C2 extends Uint8Array {
}
const v4 = Temporal.Instant;
try { v4.fromEpochMilliseconds(C2); } catch (e) {}
