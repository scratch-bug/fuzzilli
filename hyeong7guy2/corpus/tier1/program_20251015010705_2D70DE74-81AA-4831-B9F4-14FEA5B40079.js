function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v4 = 0; v4 < 5; v4++) {
        eval("var new_var = 1.1;");
    }
}
new F0(F0, F0);
