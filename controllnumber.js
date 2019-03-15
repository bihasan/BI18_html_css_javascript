<script>

var lista = [];
var str;

str = prompt("Skriv in  några tal");

lista = str.split(" ");
var check;

for (i=0; i< lista.length; i++){
check= lista[i];
 if(check == 8){
   window.alert('Rätt tal');
}
else if( check < 100 ) {    
window.alert('För litet tal');
}
else if(check> 500){
   window.alert('För stort tal');
}
else {    window.alert('du är underbar');
}

</script>