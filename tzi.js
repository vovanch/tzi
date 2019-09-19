var b="АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЬЫЬЭЮЯ";
var i=1, k=9, r={};
function num(s){
 for(;i<k;i++){
  r[s[i]]=i;
  if(i==k){
   i=1;
   num(s.slice(k))
  }
 }
};
num(b);
alert(r);
