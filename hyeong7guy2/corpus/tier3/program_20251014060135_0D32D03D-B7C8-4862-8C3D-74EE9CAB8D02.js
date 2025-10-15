const v2 = [Uint8ClampedArray,Uint8ClampedArray];
class C3 extends Uint8ClampedArray {
}
C3.toString = 4;
try { v2[C3](); } catch (e) {}
