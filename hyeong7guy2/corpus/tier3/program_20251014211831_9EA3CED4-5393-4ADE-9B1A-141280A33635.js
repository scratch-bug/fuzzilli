const v1 = [7];
const v4 = new Proxy(v1, {});
v4.includes(Proxy);
