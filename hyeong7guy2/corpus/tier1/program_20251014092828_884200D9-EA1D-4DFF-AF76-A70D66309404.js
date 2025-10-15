function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
for (const v6 in F0) {
    const v7 = v6[0];
    try { v7.toLowerCase(); } catch (e) {}
}
class C9 {
}
const v10 = C9.__defineGetter__;
for (let i12 = 0;
    (() => {
        const v14 = i12 < 20000;
        function F15(a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
        }
        for (let v19 = 0; v19 < 5; v19++) {
            F15.d >>>= 100000;
        }
        return v14;
    })();
    i12++) {
}
try { new v10(C9, v10); } catch (e) {}
