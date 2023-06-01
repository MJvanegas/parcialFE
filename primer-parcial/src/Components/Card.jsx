import React from "react";

const Card=({titulo, autor, genero, selectValue})=>{
    return<div><h3>Biblioteca M&M</h3>
     <h5>Titulo: {titulo}</h5>
     <h6>Autor: {autor}</h6>
     <h6>Género Literario: {genero}</h6>
     <h6>Pertenece a: {selectValue}</h6>

    </div>
}

export default Card;