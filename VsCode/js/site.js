// debugger;  depuración//
var ar;
console.log(ar);
ar=['h','o','l','a'];
console.log(ar);
console.warn("Longitud del ar:",ar.length,ar);
console.log("Longitud del ar:"+ar.length+ar); 
// el signo mas concatena//
/*
para
comentar 
varias 
lineas
*/
/*debugger*/
/*var miNombre="Julio Rodriguez"; //aca se declara un string//
var nombreCompleto=""
for (var i=0;i<miNombre.length;i++)
{
    
    
    if(i % 2==0)
    {
        console.log(miNombre[i].toUpperCase(),"=>",i)
        nombreCompleto=nombreCompleto+miNombre[i].toUpperCase();
    }
    else
    {
        console.log(miNombre[i].toLowerCase(),"=>",i)
        nombreCompleto=nombreCompleto+miNombre[i].toLowerCase();
    }
}
console.log(nombreCompleto);
*//
var ar = [1,2,"3",4,"5"];
/*ar=ar.map(intem=>item+1))
consola.log(ar);
console.log(ar.filter(item=>item<3));*/
ar=[2,4,6,8,10];
var ans=ar.reduce ((ac,cur))=>{
    console.log(ac);
    return cur+ac;
}0);
console.log(ans);
