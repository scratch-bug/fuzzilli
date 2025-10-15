function f0() {
    return f0;
}
f0.bind(f0).bind().length;
