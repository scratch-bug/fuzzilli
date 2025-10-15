function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f3(a4) {
        if (!a4) {
            return;
        }
        const v8 = {
            start(a7) {
                return a4;
            },
        };
        WebAssembly.catch();
    }
    for (let i11 = 0; i11 < 25000; i11++) {
        f3();
    }
}
new F0();
new BigUint64Array(1073741825);
