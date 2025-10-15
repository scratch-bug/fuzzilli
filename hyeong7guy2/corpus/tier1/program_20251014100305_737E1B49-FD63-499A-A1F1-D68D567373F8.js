function f1() {
    return 13n;
}
for (let i3 = 0; i3 < 20000; i3++) {
    Reflect.construct(f1, [f1,f1], f1, 13n);
}
