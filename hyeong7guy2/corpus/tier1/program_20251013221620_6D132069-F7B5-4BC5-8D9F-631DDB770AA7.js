function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
}
class C7 extends F3 {
    static toString(a9, a10, a11) {
        return Uint16Array;
    }
}
try { new Date(Date, -1000000000000.0, -1000000000000.0, 3, C7); } catch (e) {}
function F32(a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    with (Uint16Array) {
        const t12 = Temporal.PlainTime;
        new t12(-3.0, length, 3.0, length);
        Uint16Array.valueOf = a34;
    }
}
try { new F32(-9223372036854775808, Date); } catch (e) {}
