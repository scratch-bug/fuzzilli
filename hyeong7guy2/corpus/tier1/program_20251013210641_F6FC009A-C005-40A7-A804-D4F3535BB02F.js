function outer(a1) {
    function inner() {
        return val;
    }
    if (a1) {
        eval("var confuse = 1.1;");
    }
    var val = { p: 0 };
    let r = inner();
    if (a1) {
        r.p = 42;
    }
}
for (let i14 = 0; i14 < 10000; i14++) {
    outer(false);
}
outer(true);
