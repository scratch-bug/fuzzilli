function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    try { new this(a5); } catch (e) {}
    this <= 8n;
}
new F3(-2147483648n);
null >>> -5;
new F3();
for (let i14 = 0; i14 < 20000;) {
    ++i14;
}
