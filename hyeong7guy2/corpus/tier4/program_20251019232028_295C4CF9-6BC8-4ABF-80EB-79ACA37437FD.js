function f0() {
    const v2 = this.Float16Array;
    const v3 = new v2(this, v2, this);
    v3[2] = v3;
    return this;
}
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
f0();
