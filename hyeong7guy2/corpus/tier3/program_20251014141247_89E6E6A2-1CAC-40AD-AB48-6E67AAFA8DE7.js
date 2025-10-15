class C1 {
}
const t2 = Reflect.construct(Proxy, [C1,Reflect]);
delete t2[128];
