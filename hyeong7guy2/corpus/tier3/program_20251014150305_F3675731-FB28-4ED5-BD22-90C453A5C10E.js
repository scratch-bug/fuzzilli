async function f1(a2, a3) {
    Date().constructor.fromCharCode("62865");
    await f1;
    return Date;
}
f1("62865", f1("62865", f1));
%OptimizeFunctionOnNextCall(f1);
