function f1() {
    with (d8) {
        ({"prototype":test,...f1} = Date);
        test();
        switch (Uint32Array) {
            case 0:
            default:
        }
    }
    return d8;
}
try { f1(); } catch (e) {}
