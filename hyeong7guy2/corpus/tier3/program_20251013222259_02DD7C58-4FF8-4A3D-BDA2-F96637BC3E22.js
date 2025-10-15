let v1 = -268435456;
const v2 = class extends WeakMap {
    valueOf(a4, a5) {
        for (let v6 = 0; v6 < 5; v6++) {
            ({"a":a5,"h":v6,...v1} = this);
        }
    }
}
const v8 = Date.setFullYear;
try { v8(Date, v1); } catch (e) {}
