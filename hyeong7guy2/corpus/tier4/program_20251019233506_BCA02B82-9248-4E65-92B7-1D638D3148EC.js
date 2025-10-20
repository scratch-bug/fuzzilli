async function f1(a2, a3) {
    Date().constructor.fromCharCode("62865", a2);
    await f1;
    return Date;
}
f1(f1(f1, "62865"), f1);
%OptimizeFunctionOnNextCall(f1);
