function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i6 = 0; i6 < 25000; i6++) {
        const v14 = [1,2];
        function f15() {
            v14[0] = 1.1;
        }
        v14.push({ valueOf: f15 });
    }
}
new F0();
