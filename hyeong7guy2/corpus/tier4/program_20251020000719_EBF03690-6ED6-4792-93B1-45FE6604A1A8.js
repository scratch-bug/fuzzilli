async function f2(a3, a4) {
    a4?.__proto__;
    return await -65535n;
}
f2();
f2("ns", -65535n);
%OptimizeFunctionOnNextCall(f2);
