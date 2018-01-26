function pass(input){ // Given array
let sub = 0; // final result
let valid = true;
for (let i = 0; i < input.length; i++) { // Navigate through each row of the array
let row = input[i];
for (let j = 0; j < input[i].length; j++) { // Navigate through each element of the row
let element = row[j];
for (let k = 0; k < input[k].length; k++) { // At each element, loop again to compare it to the others.
while (valid){
if (element === row[k]){
valud = false;
}
}
if (!valid){
sub++;
}
}
}
return sub;
}
console.log(pass([["bdwdjjo", "avricm", "cjbmj", "ran", "lmfsom", "ivsof"],
["mxonybc", "fndyzzi", "gmdp", "gdfyoi", "inrvhr", "kpuueel", "wdpga", "vkq"],
["gyw", "xzgbi", "efus", "uuy"],
["hwcy", "ujdun", "bjjuvd", "jbdvju", "onnk", "xeyy", "mmp", "onkn", "qyzl"],
["jwfm", "ptjwrbl", "hhuv", "uolz", "adyweh", "qpj", "wxyogp", "igvnojq", "jmfw", "pqs", "fsnirby"]]));