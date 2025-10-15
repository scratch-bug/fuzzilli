class C0 {
}
const v3 = [C0,Reflect];
const v4 = Reflect.construct(Proxy, v3);
v4.bind(v3, C0, v4);
