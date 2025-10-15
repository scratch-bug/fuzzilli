function* f1(a2, a3, a4) {
    yield 16;
    return 16;
}
for (let i7 = 0; f1(), i7 < 20000; i7++) {
}
