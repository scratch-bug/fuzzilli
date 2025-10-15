var g = { a: 0 };

function set_prop(v) {
  g.a = v;
}

for (let i = 0; i < 100000; i++) {
  set_prop(i);
}

g.b = 1;

set_prop({});