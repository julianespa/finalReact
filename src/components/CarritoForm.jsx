import React from 'react'

const CarritoForm = ({generarOrden, cambiosForm, dataForm}) => {
    return (
        <div>
            <form 
                     onSubmit={generarOrden}
                     onChange={cambiosForm}
                >
                    <input
                        type= 'text'
                        name= 'name'
                        placeholder= 'name'
                        defaultValue= {dataForm.name}
                        required
                    />
                    <input
                        type= 'text'
                        name= 'phone'
                        placeholder= 'tel'
                        defaultValue= {dataForm.phone}
                        required
                    />
                    <input
                        type= 'email'
                        name= 'email'
                        placeholder= 'email'
                        defaultValue= {dataForm.email}
                        required
                    />
                    <input
                        type= 'email'
                        name= 'confEmail'
                        placeholder= 'Confirmar email'
                        defaultValue= {dataForm.confEmail}
                        required
                    />
                    {(dataForm.email === dataForm.confEmail) ? <button>Generar Orden</button> :<button disabled>Generar Orden</button>}
                </form>
        </div>
    )
}

export default CarritoForm
