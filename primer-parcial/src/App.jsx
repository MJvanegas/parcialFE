import { useState } from 'react';
import './App.css'
import Card from './Components/Card';

function App() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [genero, setGenero] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [guardar, setGuardar] = useState(false);
  const [errorSelect, setErrorSelect] = useState("");

  const onChangeTitulo = (event) => {
    setTitulo(event.target.value);
  };
  const onChangeAutor = (event) => {
    setAutor(event.target.value);
  };
  const onChangeGenero = (event) => {
    setGenero(event.target.value);
  };
  const onChangeSelect = (event) => {
    setSelectValue(event.target.value);
  };
  const validTitulo = titulo => {
    const withoutSpace = titulo.trim();

    if (withoutSpace.length >= 3) {
      return true;
    } else {
      setErrorSelect("Título no válido, debe contener más de 3 caracteres");
      return false;
    }
  };
  
  const validAutor = autor => {
    const withoutSpace = titulo.trim();

    if (withoutSpace.length >= 6) {
      return true;
    } else {
      setErrorSelect("Título no válido, debe contener más de 6 caracteres");
      return false;
    }
  };

  const completeInput = (titulo, autor, genero) => {
    if (titulo === "" || autor === "" || genero === "") {
      setErrorSelect("Por favor chequea que la información sea correcta");
      setGuardar(false);
      return false;
    } else {
      return true;
    }

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setGuardar(true);

    if (selectValue === "") {
      setErrorSelect("Porfa Selecciona el Propietario");
      return;
    }
    const isNameValid = validTitulo(titulo);
    const isAutorValid = validAutor(autor);
    const isCompleteInput =completeInput(titulo,autor,genero);

    
    if (isNameValid&&isAutorValid&&isCompleteInput) {
      setGuardar(true);
      setErrorSelect("");
    }
  };


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Ingresa el nombre del libro' value={titulo}
          onChange={onChangeTitulo} />
        <input type="text" placeholder='Ingresa el Autor' value={autor}
          onChange={onChangeAutor} />
        <input type="text" placeholder='Ingresa el Género Literario' value={genero}
          onChange={onChangeGenero} />

        <select placeholder='Seleccione el dueño del libro' value={selectValue}
          onChange={onChangeSelect}>
          <option value="" disabled default>Pertenece a:</option>
          <option value="Dueño 1" >Marisol</option>
          <option value="Dueño 2" >Miguel</option>
        </select>
        <input type="submit" value="Guardar" />
      </form>
      <div className='error'>{errorSelect}</div>

      {guardar ? <Card titulo={titulo}
        autor={autor}
        genero={genero}
        selectValue={selectValue}
      /> : ""}
    </div>
  );
}

export default App;