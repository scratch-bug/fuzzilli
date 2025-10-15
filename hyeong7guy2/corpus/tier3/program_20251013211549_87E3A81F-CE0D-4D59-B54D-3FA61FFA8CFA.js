try {
    function f6(a7, a8) {
        a7.push(a8);
        new Array();
    }
    for (let i13 = 0; i13 < 20000; ++i13) {
        let a = [1,2,3,4,5];
        a.length = 16;
        f6(a);
    }
    const v58 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,10,4,1,2,0,11]);
    const t11 = WebAssembly.Module;
    const v61 = new t11(v58);
    const t13 = WebAssembly.Instance;
    const v63 = new t13(v61);
    v63.exports;
    const t15 = 0;
    t15();
} catch(e66) {
}
