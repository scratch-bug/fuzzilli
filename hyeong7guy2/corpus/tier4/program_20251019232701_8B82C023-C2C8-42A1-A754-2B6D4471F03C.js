function f0(a1, a2, a3) {
    return a2;
}
const v7 = this.Realm;
try { v7.dispose(Worker, f0, "function", f0, v7); } catch (e) {}
const v10 = new Worker(f0, { type: "function" });
const v11 = v10.terminate;
try { new v11(this, v10, v7, v11, v7); } catch (e) {}
