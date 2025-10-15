const v1 = class extends Int16Array {
}
const v2 = new v1();
v2.join(Int16Array).localeCompare();
