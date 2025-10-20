const v4 = new Proxy(Symbol, { set: null });
v4.a = v4;
