const v1 = this.DisposableStack;
const v2 = new v1(this, v1);
v2.move();
try { v2.defer(); } catch (e) {}
