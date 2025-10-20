function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            new BigUint64Array(1073741825);
        }
        for (let i12 = 0; i12 < 100000; i12++) {
            const v18 = {};
            %PretenureAllocationSite({ p1: v18 });
        }
        f7();
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v21 = new F2();
v21.toString();
class C23 extends Set {
}
new C23();
