class C0 {
}
function f1() {
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
        try {
            Array(-339025740);
        } catch(e7) {
            e7.stack;
        }
    }
    const v9 = new F2();
    return v9;
}
C0.constructor = f1;
const t15 = C0.constructor;
t15(C0);
gc();
