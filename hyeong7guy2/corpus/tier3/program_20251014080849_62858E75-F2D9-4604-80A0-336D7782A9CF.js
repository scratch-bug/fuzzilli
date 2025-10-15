function f0() {
    for (let v1 = 0; v1 < 5; v1++) {
        v1--;
    }
    return f0;
}
this.escape(f0);
