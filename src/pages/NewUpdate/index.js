import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from '../../services/api';

export default function NewUpdate(){

  const[name, setName] = useState('');
  const[description, setDescription] = useState('');
  const navigate = useNavigate();

  // idea_id definido na rota NewUpdate
  const{idea_id} = useParams();

  async function saveOrUpdate(e){

    e.preventDefault();

    const data = {name, description};

    if (idea_id === '0') {
      try {
        await api.post('api/v1/ideas', data, {});
        navigate('/');
      } catch (error) {
        alert('erro ao salvar');        
      }      
    } else {
      try {
        await api.patch(`api/v1/ideas/${idea_id}`, data, {});
        navigate('/');
      } catch (error) {
        alert('erro ao atualizar');        
      }      
    }
  }

  // carrega um registro da api e seta dados para atualização
  async function loadIdea(){
    try {
      const response = await api.get(`api/v1/ideas/${idea_id}`,{});
      setName(response.data.name);
      setDescription(response.data.description);
    } catch (error) {
      alert('erro ao buscar registro');
      navigate('/');      
    }
  }

  // chama loadIdea e preenche form
  useEffect(() => {
    if (idea_id === '0') {
      return;      
    } else {
      loadIdea();      
    }
  }, [idea_id]);

  return(

    <div data-testid="mycard" className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Mainframe_Ideas Crud
      </div>
      <div className="card-body">

        <Link data-testid="mylink" className="btn btn-dark" 
        style={{marginBottom: '5px'}} to="/">Home</Link>

        <form data-testid="myform" onSubmit={saveOrUpdate}>

          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input data-testid="input1" id="name" type="text" 
            style={{marginBottom: '20px'}} className="form-control" 
            placeholder="Nome" value={name}
            onChange={e => setName(e.target.value)}></input>
          </div>

          <div className="form-group">
            <label htmlFor="description">Descrição</label>
            <input data-testid="input2" id="description" type="text" 
            style={{marginBottom: '20px'}} className="form-control" 
            placeholder="Descrição" value={description}
            onChange={e => setDescription(e.target.value)}></input>
          </div>

          <button data-testid="btnenviar" type="submit" className="btn btn-primary">Enviar</button>

        </form>

      </div>
    </div>

  );

}