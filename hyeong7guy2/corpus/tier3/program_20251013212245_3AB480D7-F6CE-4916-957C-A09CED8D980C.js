function f0(a1) {
    switch (a1) {
        case 0:
            break;
        default:
            arguments[2];
    }
    return f0;
}
for (let i6 = 0; i6 < 100000; i6++) {
    f0(0, 1, 2);
}
