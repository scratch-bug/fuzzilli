function* f0(a1, a2, a3, a4) {
    return a3;
}
f0();
f0.prototype = f0;
