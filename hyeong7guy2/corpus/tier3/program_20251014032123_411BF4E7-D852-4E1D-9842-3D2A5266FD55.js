function f0() {
    arguments[0] = arguments;
    return f0;
}
f0();
