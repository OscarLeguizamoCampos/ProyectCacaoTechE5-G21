import React, {useEffect, useState } from 'react'


const Articulos = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textoBoton, setTextoBoton] = useState('Crear Nuevo')
    
    useEffect(()=> {
        if(mostrarTabla){
            setTextoBoton('Crear Nuevo')
        }else{
            setTextoBoton('Mostrar Todos')
        }
    }, [mostrarTabla])


    return (
      <div className = 'flex h-full w-full flex-col items-center justify-start p-8'>
          <div className ='flex flex-col'>
            <h2 className = 'text-3xl font-extrabold text-gray-900'>
                PAGINA DE ADMINISTRACION DE ARTICULOS
            </h2>

            <button
            onClick={() => setMostrarTabla(!mostrarTabla)}
            className="text-white bg-indigo-500 p-5 rounded-full m-6 w-28 self-end"
            >
            {textoBoton}
            </button>            

          </div>
          {mostrarTabla ? <TablaArticulos /> : <FormularioCreacionArticulos />}
        
      </div>
    );
}

const TablaArticulos=()=>{
    return (
        <div className = 'flex flex-col items-center justify-center'>
            <h2 className = 'text-2xl font-extrabold text-gray-800'>Todos los articulos</h2>
            <table class='table-auto'>
                <thead>
                    <tr className = ' '>
                        <th className = ' border-separete border border-indigo-600 p-2'>Nombre articulo</th>
                        <th className = ' border-separete border border-indigo-600 p-2'>Marca Articulo</th>
                        <th className = ' border-separete border border-indigo-600 p-2'>Modelo articulo</th>
                    </tr>
                </thead>
                <tr class="bg-emerald-200">
                    <td className = ' border-separete border border-indigo-600 p-2'>Moto Crucero</td>
                    <td className = ' border-separete border border-indigo-600 p-2'>Honda</td>
                    <td className = ' border-separete border border-indigo-600 p-2'>2010</td>
                </tr>
                <tr>
                    <td className = ' border-separete border border-indigo-600 p-2'>Moto2</td>
                    <td className = ' border-separete border border-indigo-600 p-2'>Yamaha</td>
                    <td className = ' border-separete border border-indigo-600 p-2'>2021</td>
                </tr>

                <tbody>

                </tbody>
            </table>
        </div>
    )
    
}

const FormularioCreacionArticulos=()=>{
    return (
        <div className = 'flex flex-col items-center justify-center'>
            <h2 className = ' text-2xl font-extrabold text-gray-800'> CREAR NUEVO ARTICULO</h2>
            
            <form className = 'grid grid-cols-2' >
            
<table class="min-w-full border-collapse block md:table">
		<thead class="block md:table-header-group">
			<tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Name</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">User Name</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Email Address</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Mobile</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
			</tr>
		</thead>
		<tbody class="block md:table-row-group">
			<tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Name</span>Jamal Rios</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">User Name</span>jrios1</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Email Address</span>jrios@icloud.com</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Mobile</span>582-3X2-6233</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
					<span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
					<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Edit</button>
					<button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
				</td>
			</tr>
			<tr class="bg-white border border-grey-500 md:border-none block md:table-row">
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Name</span>Erwin Campbell</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">User Name</span>ecampbell088</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Email Address</span>ecampbell088@hotmail.com</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Mobile</span>318-685-X414</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
					<span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
					<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Edit</button>
					<button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
				</td>
			</tr>
			{/* <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Name</span>Lillie Clark</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">User Name</span>lillie</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Email Address</span>lillie.clark@gmail.com</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Mobile</span>505-644-84X4</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
					<span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
					<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Edit</button>
					<button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
				</td>
			</tr> 
			<tr class="bg-white border border-grey-500 md:border-none block md:table-row">
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Name</span>Maribel Koch</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">User Name</span>maribelkoch</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Email Address</span>mkoch@yahoo.com</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Mobile</span>582-400-3X36</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
					<span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
					<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Edit</button>
					<button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
				</td>
			</tr>	*/}		
		</tbody>
	</table>
            <table>                  <thead>
                    <tr>
                        <th>Nombre articulo</th>
                        <th>Marca Articulo</th>
                        <th>Modelo articulo</th>
                    </tr>
                </thead>  <tr>  <td><input className = 'bg-gray-100 border border-indigo-600 p-2 rounded-lg m-2' type="text" /></td> 
                  <td>   <input className = 'bg-gray-100 border border-indigo-600 p-2 rounded-lg m-2' type="text" /></td>
                  <td>   <input className = 'bg-gray-100 border border-indigo-600 p-2 rounded-lg m-2' type="text" />  </td>   </tr>
                {/* <input className = 'bg-gray-100 border border-indigo-600 p-2 rounded-lg m-2' type="text" /> */}
                {/* <input className = 'bg-gray-100 border border-indigo-600 p-2 rounded-lg m-2' type="text" /> */}
                </table> 
                <button className ='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-700 text-white'>
                    Guardar Articulo
                </button>
            </form>

            
        </div>
    )
}

export default Articulos
