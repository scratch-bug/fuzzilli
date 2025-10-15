function f0() {
    let obj = { a: 1 };
    function f4() {
        eval("var new_var = 1.1;");
        obj.a = 2;
        return obj;
    }
    f4();
    return 1;
}
for (let i11 = 0; i11 < 2000; i11++) {
    f0();
}
