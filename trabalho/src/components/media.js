import React, { useState } from 'react'

function CalculadoraDeMedia() {
    const [nota1, setNota1] = useState('');
    const [nota2, setNota2] = useState('');
    const [nota3, setNota3] = useState('');
    const [media, setMedia] = useState(null);

    const calcularMedia = () => {
        const media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;
        setMedia(media);

        if (media < 4){
            alert('O aluno foi Reprovado! =(');
        }
        if (media > 4 && media < 6){
            alert('O aluno ficou de Recuperação!');
        } else{
            alert('O aluno foi Aprovado! =D');
        }
    }
    return (
        <div>
            <h2> 📏Primeita Nota📏 </h2>
            <input
                type="number"
                value={nota1}
                onChange={(e) => setNota1(e.target.value)}
                placeholder="Digite a primeira nota"
            />
            <br></br><br></br>
            <h2> 📏Segunda Nota📏 </h2>
            <input
                type="number"
                value={nota2}
                onChange={(e) => setNota2(e.target.value)}
                placeholder="Digite a segunda nota"
            />
            <br></br><br></br>
            <h2> 📏Terceira Nota📏 </h2>
            <input
                type="number"
                value={nota3}
                onChange={(e) => setNota3(e.target.value)}
                placeholder="Digite a terceira nota"
            />
            <br></br><br></br><br></br>
            <button onClick={calcularMedia}> Calcular Média </button>
            {media !== null && <p> Resultado: {media}</p>}
        </div>
    );
}

export default CalculadoraDeMedia;