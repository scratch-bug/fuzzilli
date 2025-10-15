function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i10 = 0; i10 < 25000; i10++) {
        const v18 = [1];
        function f19() {
            v18[0] = 1.1;
        }
        v18.push({});
    }
}
new F4();
