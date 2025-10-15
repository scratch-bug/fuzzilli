function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    this <= 8n;
}
new F1();
