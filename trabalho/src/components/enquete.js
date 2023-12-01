import React,{useState} from "react"; 
 
function Votacao(){ 
    const[numero1,setNumero1] = useState('') 
    const[numero2,setNumero2] = useState('') 
    const[numero3,setNumero3] = useState('') 
    const[opis1,setOpis1] = useState('') 
    const[opis2,setOpis2] = useState('') 
    const[opis3,setOpis3] = useState('') 
  
    const ops1 = () => { 
        const resultado = Number(numero1) + 1; 
        setNumero1(resultado.toString());  
        setOpis1(resultado) 
      }; 
      const ops2 = () => { 
        const resultado = Number(numero2) + 1; 
        setNumero2(resultado.toString()); 
        setOpis2(resultado); 
      }; 
      const ops3 = () => { 
        const resultado = Number(numero3) + 1; 
        setNumero3(resultado.toString()); 
        setOpis3(resultado); 
      }; 
  
return( 
    <div className="inputscounter"> 
        <br/> 
        <button onClick={ops1} >Opção 1</button> 
        <button onClick={ops2} >Opção 2</button> 
        <button onClick={ops3} >Opção 3</button> 
        <br/> 
        {opis1 !== null && <p className="result">Opção 1: {opis1 }</p>} 
        {opis2 !== null && <p className="result">Opção 2: {opis2 }</p>} 
        {opis3 !== null && <p className="result">Opção 3: {opis3 }</p>} 
  
    </div> 
    ); 
} 
 
export default Votacao; 
