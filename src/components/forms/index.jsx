import { useRef } from 'react';
import getFormData from '../../utils/getFormData';

function Forms() {
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.current) return alert("Ops! Algo deu errado");

    const formData = getFormData(form);

    console.log(formData);
    form.current?.reset();
  }

    return (
        <div className='retanguloAzul'>
          <div className='retanguloBranco'>
            <h1>Cadastrar Tarefa</h1>
              <form onSubmit={handleSubmit} ref={form}>
                <input type="text" name="title" placeholder="Título"/>
                <select
                value={categoria}
                onChange={(event) => setcategoria(event.target.value)}>
                  <option value="">Categoria</option>
                  <option value="trabalho">Trabalho</option>
                  <option value="Lazer">Aquilo que não temos</option>
                  <option value="dh">DH</option>
                  <option value="outros">Outros</option>
                </select>
                <input type="date" name="data" placeholder="Data"/>

                {/* Preciso adicionar o textarea - descrição */}
                {/* <label> Descrição <textarea value={this.state.value} onChange={this.handleChange} />        </label> */}


                <button type="submit">Salvar</button>
              </form>
          </div>
        </div>
  )
}

export default Forms;