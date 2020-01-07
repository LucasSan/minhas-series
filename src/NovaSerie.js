import React, {useState} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const NovaSerie = () => {
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)
    const onChange = evt => {
        setName(evt.target.value)
    }

    const save = () => {
        axios
            .post('/api/series', {
                name
            })
            .then(res => {
                setSuccess(true)
            })
    }

    if (success) {
        return <Redirect to='/series' />
    }

    return (
        <div className='container'>
            <h1>Nova Serie</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Nome</label>
                    <input
                        placeholder='Nome da Serie'
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

export default NovaSerie