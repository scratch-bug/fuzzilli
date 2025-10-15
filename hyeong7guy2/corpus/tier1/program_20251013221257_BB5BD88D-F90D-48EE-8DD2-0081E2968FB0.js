function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a8;
    this.c = a6;
}
new F4(5, Array, -4294967295);
new F4(-4294967295, Array, 1654);
