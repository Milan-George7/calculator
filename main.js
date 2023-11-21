
const displayData = (data)=>{
    result.value += data
}


const calc_AC =()=>{
    result.value=""
}


const calc_Result =()=>{
  if(result.value!=""){
    try{ result.value = eval(result.value)}
    catch{
     result.value = "Invalid !"
    }
  }
}


const removeLast =()=>{
    result.value = result.value.slice(0,-1)
}