import React, {useState} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const NovoGenero = () => {
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)
    const onChange = evt => {
        setName(evt.target.value)
    }

    const save = () => {
        axios
            .post('/api/genres', {
                name
            })
            .then(res => {
                setSuccess(true)
            })
    }

    if (success) {
        return <Redirect to='/generos' />
    }

    return (
        <div className='container'>
            <h1>Novo Genero</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Nome</label>
                    <input
                        placeholder='Nome do Genero'
                        id='name'
                        type='text'
                        className='form-control'
                        value={name}
                        onChange={onChange} />
                </div>
                <button
                    type='button'
                    className='btn btn-primary'
                    onClick={save}>Salvar</button>
            </form>
        </div>
    )
}

export default NovoGenero