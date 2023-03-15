import React, {useEffect, useState} from "react";
import {useToast} from "../components/Toast/context";

const tarefas = [
  {
    id: "01",
    titulo: "Tarefa 1",
    categoria: "Categoria 1",
    data: "25/01/2023",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos odio necessitatibus laudantium maiores quas reiciendis voluptate rem non delectus quaerat eos, reprehenderit quisquam fugit molestias id illum nulla fuga ipsam."
  },
  {
    id: "02",
    titulo: "Tarefa 2",
    categoria: "Categoria 2",
    data: "25/01/2023",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos odio necessitatibus laudantium maiores quas reiciendis voluptate rem non delectus quaerat eos, reprehenderit quisquam fugit molestias id illum nulla fuga ipsam."
  },
  {
    id: "03",
    titulo: "Tarefa 3",
    categoria: "Categoria 3",
    data: "25/01/2023",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos odio necessitatibus laudantium maiores quas reiciendis voluptate rem non delectus quaerat eos, reprehenderit quisquam fugit molestias id illum nulla fuga ipsam."
  }
];

const Card = () => {
  const {showToast} = useToast();
  const [listaTarefas, setListaTarefas] = useState([]);

  const deleteTask = id => {
    setListaTarefas(currentState =>
      currentState.filter(item => item.id !== id)
    );
    showToast("Tarefa excluída", "failed");
  };

  const editTask = () => {
    return console.log("edit");
  };

  useEffect(() => {
    setListaTarefas(tarefas);
  }, []);

  return (
    <div>
      <ul>
        {listaTarefas.map(({id, titulo, categoria, data, descricao}, index) => {
          return (
            <li key={index}>
              <h2>{titulo}</h2>
              <span>{id}</span>
              <h4>{categoria}</h4>
              <p>{descricao}</p>
              <h4>{data}</h4>
              <button onClick={() => deleteTask(id)}>Delete</button>
              <button onClick={editTask}>Edit</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Card;
