const t0 = this.AsyncDisposableStack;
const v2 = new t0();
v2.disposeAsync(v2);
try { v2.adopt(); } catch (e) {}
