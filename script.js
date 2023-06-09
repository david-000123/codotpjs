  
    let posición = document.getElementById ("Categoria")

    let dijito = document.getElementById("cantidad")

    let boton = document.getElementById("bt_n")

    let divResultado = document.getElementById("div")

    let  reseteo = document.getElementById("borrar")
    
   
   
   function resumen(b,a){
       
       let resultado = 0
       let descuento = 0
       let resultado_total = 0
       if(a == "Estudiantes"){
       resultado = b * 200
       descuento = resultado * 0.80
       resultado_total = resultado - descuento  
       return resultado_total
    }
       if(a == "Trainees"){
       resultado = b * 200
       descuento = resultado * 0.50
       resultado_total = resultado - descuento  
      return resultado_total    
    }
        if(a =="Juniors"){
        resultado = b * 200
        descuento = resultado * 0.15
        resultado_total = resultado - descuento  
        return resultado_total
   }}
      boton.addEventListener("click",function(){
      divResultado.textContent="Total a pagar: $"+ resumen(dijito.value, posición.value)
    })
    reseteo.addEventListener("click",function(){
      divResultado.textContent = "Total a pagar:"
    })
    

        

   