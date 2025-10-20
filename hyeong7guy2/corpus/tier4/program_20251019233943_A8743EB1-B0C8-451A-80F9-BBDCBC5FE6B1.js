function f0() {
    return arguments;
}
const v2 = f0();
v2.toString = f0;
const v3 = [-5.251343693197077,2.9938341097507077,1.0,9.711635101303418,0.005855629290240083,-0.0,2.220446049250313e-16,NaN];
try { v3.sort(v2); } catch (e) {}
