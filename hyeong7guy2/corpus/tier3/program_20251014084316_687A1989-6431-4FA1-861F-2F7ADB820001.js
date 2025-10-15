const t0 = this.AsyncDisposableStack;
const v2 = new t0(this);
const v3 = v2.disposeAsync();
try { v2.defer(v3, v3); } catch (e) {}
