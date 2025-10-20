class C2 extends Uint16Array {
    static [1283972536n];
}
const v3 = [4294967297,8,-1382080415,-4294967295,536870912,2147483647,56433];
for (let i5 = 0; i5 < 10000; ++i5) {
    function f11() {
        const v13 = 1283972536n && -33752;
        let v14 = 0;
        while (v14 < 7) {
            v14++;
            function f18(a19, a20, a21) {
                return v13;
            }
            try { f18(v3); } catch (e) {}
        }
        return arguments;
    }
    let v24;
    try { v24 = f11(); } catch (e) {}
    try { f11(1.1, 2.2); } catch (e) {}
    v24?.[0];
}
