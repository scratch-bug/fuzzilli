function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a7;
}
const v9 = new F3(1280306130, 1280306130, 127);
new F3(1280306130, -2, 1280306130);
try { v9.__proto__ = v9; } catch (e) {}
