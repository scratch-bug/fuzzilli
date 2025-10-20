function f0() {
    function f2() {
        return f0;
    }
    let v3 = f2.bind();
    for (let i5 = 0; i5 < 20000; i5++, Int16Array instanceof v3) {
    }
    return v3;
}
f0();
