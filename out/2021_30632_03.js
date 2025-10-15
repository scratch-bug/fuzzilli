globalThis.obj = { a: 1.1 };

function set_prop(o, v) {
  o.a = v;
}

for (let i = 0; i < 10000; i++) {
  set_prop(globalThis.obj, 1.1);
}

globalThis.obj.b = 2.2;

set_prop(globalThis.obj, {p: 1337});