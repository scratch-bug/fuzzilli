function f0() {
    return Temporal.PlainDate.prototype.toJSON();
}
try { f0(); } catch (e) {}
