function f3() {
    delete arguments[2];
    return 70;
}
f3(70, 0, f3, -3n);
