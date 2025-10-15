function f0() {
    function f1() {
        return f1;
    }
    let v2 = -10780;
    with (f1) {
        v2 **= 0;
    }
    return f1;
}
f0();
