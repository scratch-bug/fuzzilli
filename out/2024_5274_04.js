let flag = false;
function poc(arg) {
  class C {
    static {
      if (flag) {
        eval('arg');
      }
    }
  }
}
for (let i = 0; i < 10000; i++) {
  poc(1);
}
flag = true;
poc(2);