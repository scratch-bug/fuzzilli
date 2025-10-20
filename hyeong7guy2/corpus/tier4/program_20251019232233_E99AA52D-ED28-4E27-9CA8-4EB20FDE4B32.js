function f1() {
    return f1;
}
function f2() {
    return Symbol;
}
for (let i4 = 0; i4 < 25000; i4++) {
    Reflect.construct(f2, [i4,i4,i4]);
}
Reflect.construct(f1, Symbol);
