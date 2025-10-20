function f1() {
    return Infinity;
}
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.valueOf = f1;
    this <= 8n;
}
new F3(8n);
