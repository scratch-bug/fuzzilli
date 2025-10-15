function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C3 {
}
Object.defineProperty(C3, 1073741825, { value: Uint16Array });
C3[1073741825] = F0;
