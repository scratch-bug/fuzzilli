for (let v0 = 0; v0 < 1000; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        new SharedArrayBuffer(128, { maxByteLength: 2147483649 });
    }
    new F1();
}
