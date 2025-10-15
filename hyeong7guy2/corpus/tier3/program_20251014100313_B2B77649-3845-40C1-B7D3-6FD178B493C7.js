function f1(a2, a3, a4) {
    delete Symbol[1073741823];
    let v7 = 1;
    const v9 = {
        [Symbol]() {
            v7 = this;
        },
    };
    return a3;
}
f1(f1, f1, f1);
f1();
%OptimizeMaglevOnNextCall(f1);
f1();
