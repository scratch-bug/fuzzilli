for (let i3 = 0, i4 = 10; i4; i4--) {
}
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    async function f14(a15, a16) {
        const v17 = a16.constructor;
        let v18;
        try { v18 = v17(a13); } catch (e) {}
        for (let i21 = 0, i22 = 10; i22; i22--) {
        }
        return v18;
    }
    f14(a12, f14);
}
new F10(F10, Symbol);
