import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from '../../services/api';

export default function Ideas(){

  const[my_ideas, setIdeas] = useState([]);
  const navigate = useNavigate();

  // read, busca todos os registros na api
  useEffect(() => {
    api.get('api/v1/ideas', {})
    .then(response => {setIdeas(response.data)})
  }, []);

  return(

    <div data-testid="mycard" className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Mainframe_Ideas Crud
      </div>
      <div className="card-body">

        <Link data-testid="mylink" className="btn btn-success" 
        style={{marginBottom: '10px'}} to="/newupdate/0">Novo</Link>

        <table data-testid="mytable" className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nome</th>
              <th scope="col">Descrição</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {my_ideas.map(idea => (
              <tr key={idea.id}>
                <th scope="row">{idea.id}</th>
                  <td>{idea.name}</td>
                  <td>{idea.description}</td>
                  <td>

                    <button data-testid="mybtn1" type="button"
                    className="btn btn-outline-info">Editar</button>

                    <button data-testid="mybtn2" type="button"
                    className="btn btn-outline-danger">Excluir</button>

                  </td>
              </tr>
            ))}
            
          </tbody>
        </table>

      </div>
    </div>

  );

}