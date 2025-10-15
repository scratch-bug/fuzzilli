function F0() {
    if (!new.target) { throw 'must be called with new'; }
    new SharedArrayBuffer(128, { maxByteLength: 2147483649 });
}
new F0();
class C8 {
}
try { C8.__defineSetter__(); } catch (e) {}
