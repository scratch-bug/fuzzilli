function f0(a1) {
    const t1 = /ab|c/ugm;
    t1.constructor = -4294967295;
    function f4() {
        const v5 = {};
        for (let v7 = 0; v7 < 10; v7++) {
            null == v5;
        }
    }
    class C9 extends f4 {
    }
    new C9();
    return C9;
}
new Worker(f0, { type: "function" });
function f15(a16) {
    return Worker;
}
new Worker(f15, { type: "function" });
