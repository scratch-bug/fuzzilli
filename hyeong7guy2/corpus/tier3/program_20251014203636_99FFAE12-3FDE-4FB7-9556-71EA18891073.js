class C1 extends Set {
}
const v5 = Reflect.construct(C1, [], Date);
try { v5.toDateString(); } catch (e) {}
