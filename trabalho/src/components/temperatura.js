import React,{useState} from "react"; 
 
function Temperatura(){ 
    const[numero1,setNumero1] = useState('') 
    const[opis1,setOpis1] = useState('') 
    const[opis2,setOpis2] = useState('') 
  
 
 
    const femc = () => { 
        const resultado =  0.5555555555555556 * (Number(numero1) - 32); 
        setNumero1(resultado.toString());  
        setOpis1(resultado) 
      }; 
 
 
      const cemf = () => { 
        const resultado = Number(numero1) * 1.8 + 32; 
        setNumero1(resultado.toString()); 
        setOpis2(resultado); 
      }; 
    
return( 
    <div className="inputscounter"> 
<br/> 
<input type="number" value={numero1} onChange={(e)=>setNumero1(e.target.value)} placeholder="Digite os Graus" /><br/><br/> 
        <button onClick={femc} >transformar Fahrenheit em Celsius</button> <br/><br/> 
        <button onClick={cemf} >transformar Celsius em Fahrenheit</button> 
    </div> 
    ); 
} 
 
 
export default Temperatura;
