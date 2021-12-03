import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { nanoid } from "nanoid";
import { Dialog, Tooltip } from "@material-ui/core";
import ReactLoading from 'react-loading';
import "react-toastify/dist/ReactToastify.css";
import { obtenerArticulos, crearArticulo,  editarArticulo, eliminarArticulo } from "utils/api";
// import { useAuth0 } from "@auth0/auth0-react";
import PrivateComponent from "components/PrivateComponent";

const Articulos = () => {
  // const { getAccessTokenSilently } = useAuth0();
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [articulos, setArticulos] = useState([]);
  const [textoBoton, setTextoBoton] = useState("Crear Nuevo Articulo");
  const [colorBoton, setColorBoton] = useState("indigo");
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchArticulos = async () => {
      setLoading(true);
      await obtenerArticulos(
        (response) => {
          console.log('la respuesta que se recibio fue', response);
          setArticulos(response.data);
          setEjecutarConsulta(false);
          setLoading(false);
        },
        (error) => {
          console.error('Salio un error:', error);
          setLoading(false);
        }
      );
    };
    console.log('consulta', ejecutarConsulta);
    if (ejecutarConsulta) {
      fetchArticulos();
    }
  }, [ejecutarConsulta]);
 

  useEffect(() => {
    //obtener lista de Articulos desde el backend
    if (mostrarTabla) {
      setEjecutarConsulta(true);
    }
  }, [mostrarTabla]);

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton("Crear Nuevo Articulo");
      setColorBoton("indigo");
    } else {
      setTextoBoton("Mostrar Todos los Articulos");
      setColorBoton("green");
    }
  }, [mostrarTabla]);
  return (
    <div className="flex h-full w-full flex-col items-center justify-start p-8">
      <div className="flex flex-col w-full">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Página de administración de Articulos
        </h2>
        <button
          onClick={() => {
            setMostrarTabla(!mostrarTabla);
          }}
          className={`text-white bg-${colorBoton}-500 p-5 rounded-full m-6 w-28 self-end`}
        >
          {textoBoton}
        </button>
      </div>
      {mostrarTabla ? (
        <TablaArticulos
          loading={loading}
          listaArticulos={articulos}
          setEjecutarConsulta={setEjecutarConsulta}
        />
      ) : (
        <FormularioCreacionArticulos
          setMostrarTabla={setMostrarTabla}
          listaArticulos={Articulos}
          setArticulos={setArticulos}
        />
      )}
      <ToastContainer position="bottom-center" autoClose={5000} />
    </div>
  );
};

const TablaArticulos = ({ loading, listaArticulos, setEjecutarConsulta }) => {
  const [busqueda, setBusqueda] = useState("");
  const [articulosFiltrados, setArticulosFiltrados] = useState(listaArticulos);

  useEffect(() => {
    setArticulosFiltrados(
      listaArticulos.filter((elemento) => {
        return JSON.stringify(elemento)
          .toLowerCase()
          .includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, listaArticulos]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <input
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar"
        className="border-2 border-gray-700 px-3 py-1 self-start rounded-md focus:outline-none focus:border-indigo-500"
      />
      <h2 className="text-2xl font-extrabold text-gray-800">
        Todos los Articulos
      </h2>
      <div className="hidden md:flex w-full">
      {loading ? (
          <ReactLoading type='cylon' color='#abc123' height={667} width={375} />
        ) : (
        <table className="tabla">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre del Articulo</th>
              <th>Marca del Articulo</th>
              <th>Modelo del Articulo</th>
              <PrivateComponent roleList={['administrador']}>
                  <th>Acciones</th>
              </PrivateComponent>
            </tr>
          </thead>
          <tbody>
            {articulosFiltrados.map((articulo) => {
              return (
                <FilaVehiculo
                  key={nanoid()}
                  vehiculo={articulo}
                  setEjecutarConsulta={setEjecutarConsulta}
                />
              );
            })}
          </tbody>
        </table>
        )}
      </div>
      <div className="flex flex-col w-full m-2 md:hidden">
        {articulosFiltrados.map((el) => {
          return (
            <div className="bg-gray-400 m-2 shadow-xl flex flex-col p-2 rounded-xl">
              <span>{el.name}</span>
              <span>{el.brand}</span>
              <span>{el.model}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const FilaVehiculo = ({ articulo, setEjecutarConsulta }) => {
  const [edit, setEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [infoNuevoArticulo, setInfoNuevoArticulo] = useState({
    _id: articulo._id,
    name: articulo.name,
    brand: articulo.brand,
    model: articulo.model,
  });

  const actualizarArticulo = async () => {
    //enviar la info al backend

    await editarArticulo(
      articulo._id,
      {
        name: infoNuevoArticulo.name,
        brand: infoNuevoArticulo.brand,
        model: infoNuevoArticulo.model,
      },
      (response) => {
        console.log(response.data);
        toast.success("Articulo modificado con éxito");
        setEdit(false);
        setEjecutarConsulta(true);
      },
      (error) => {
        toast.error("Error modificando el Articulo");
        console.error(error);
      }
    );
  };

  const deleteArticle = async () => {
    await eliminarArticulo(
      articulo._id,
      (response) => {
        console.log(response.data);
        toast.success("Articulo eliminado con éxito");
        setEjecutarConsulta(true);
      },
      (error) => {
        console.error(error);
        toast.error("Error eliminando el Articulo");
      }
    );

    setOpenDialog(false);
  };

  return (
    <tr>
      {edit ? (
        <>
          <td>{infoNuevoArticulo._id}</td>
          <td>
            <input
              className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
              type="text"
              value={infoNuevoArticulo.name}
              onChange={(e) =>
                setInfoNuevoArticulo({
                  ...infoNuevoArticulo,
                  name: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
              type="text"
              value={infoNuevoArticulo.brand}
              onChange={(e) =>
                setInfoNuevoArticulo({
                  ...infoNuevoArticulo,
                  brand: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
              type="text"
              value={infoNuevoArticulo.model}
              onChange={(e) =>
                setInfoNuevoArticulo({
                  ...infoNuevoArticulo,
                  model: e.target.value,
                })
              }
            />
          </td>
        </>
      ) : (
        <>
          <td>{articulo._id.slice(20)}</td>
          <td>{articulo.name}</td>
          <td>{articulo.brand}</td>
          <td>{articulo.model}</td>
        </>
      )}
      <PrivateComponent roleList={['administrador']}>    
        <td>
          <div className="flex w-full justify-around">
            {edit ? (
              <>
                <Tooltip title="Confirmar Edición" arrow>
                  <i
                    onClick={() => actualizarArticulo()}
                    className="fas fa-check text-green-700 hover:text-green-500"
                  />
                </Tooltip>
                <Tooltip title="Cancelar edición" arrow>
                  <i
                    onClick={() => setEdit(!edit)}
                    className="fas fa-ban text-yellow-700 hover:text-yellow-500"
                  />
                </Tooltip>
              </>
            ) : (
              <>
                <Tooltip title="Editar Articulo" arrow>
                  <i
                    onClick={() => setEdit(!edit)}
                    className="fas fa-pencil-alt text-yellow-700 hover:text-yellow-500"
                  />
                </Tooltip>
                <Tooltip title="Eliminar Articulo" arrow>
                  <i
                    onClick={() => setOpenDialog(true)}
                    className="fas fa-trash text-red-700 hover:text-red-500"
                  />
                </Tooltip>
              </>
            )}
          </div>
          <Dialog open={openDialog}>
            <div className="p-8 flex flex-col">
              <h1 className="text-gray-900 text-2xl font-bold">
                ¿Está seguro de querer eliminar el articulo?
              </h1>
              <div className="flex w-full items-center justify-center my-4">
                <button
                  onClick={() => deleteArticle()}
                  className="mx-2 px-4 py-2 bg-green-500 text-white hover:bg-green-700 rounded-md shadow-md"
                >
                  Sí
                </button>
                <button
                  onClick={() => setOpenDialog(false)}
                  className="mx-2 px-4 py-2 bg-red-500 text-white hover:bg-red-700 rounded-md shadow-md"
                >
                  No
                </button>
              </div>
            </div>
          </Dialog>
        </td>
      </PrivateComponent>
    </tr>
  );
};
const FormularioCreacionArticulos = ({ setMostrarTabla, listaArticulos, setArticulos }) => {
  const form = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoArticulo = {};
    fd.forEach((value, key) => {
      nuevoArticulo[key] = value;
    });

    await crearArticulo(
      {
        name: nuevoArticulo.name,
        brand: nuevoArticulo.brand,
        model: nuevoArticulo.model,
      },
      (response) => {
        console.log(response.data);
        toast.success('Artículo agregado con éxito');
      },
      (error) => {
        console.error(error);
        toast.error('Error creando un artículo');
      }
    );
// const FormularioCreacionArticulos = ({
//   setMostrarTabla,
//   listaArticulos,
//   setArticulos,
// }) => {
//   const form = useRef(null);

//   const submitForm = async (e) => {
//     e.preventDefault();
//     const fd = new FormData(form.current);

//     const nuevoVehiculo = {};
//     fd.forEach((value, key) => {
//       nuevoVehiculo[key] = value;
//     });
//     await crearArticulos(
//       {
//         name: nuevoVehiculo.name,
//         brand: nuevoVehiculo.brand,
//         model: nuevoVehiculo.model,
//       },
//       (response) => {
//         console.log(response.data);
//         toast.success("Articulo agregado con éxito");
//       },
//       (error) => {
//         console.error(error);
//         toast.error("Error creando un articulo");
//       }
//     );

    setMostrarTabla(true);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-extrabold text-gray-800">
        Crear nuevo Articulo
      </h2>
      <form ref={form} onSubmit={submitForm} className="flex flex-col">
        <label className="flex flex-col" htmlFor="nombre">
          Nombre del Articulo
          <input
            name="name"
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
            type="text"
            placeholder="Corolla"
            required
          />
        </label>
        <label className="flex flex-col" htmlFor="marca">
          Marca del Articulo
          <select
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
            name="brand"
            required
            defaultValue={0}
          >
            <option disabled value={0}>
              Seleccione una opción
            </option>
            <option>Renault</option>
            <option>Toyota</option>
            <option>Ford</option>
            <option>Mazda</option>
            <option>Chevrolet</option>
          </select>
        </label>
        <label className="flex flex-col" htmlFor="modelo">
          Modelo del Articulo
          <input
            name="model"
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
            type="number"
            min={1992}
            max={2022}
            placeholder="2014"
            required
          />
        </label>

        <button
          type="submit"
          className="col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white"
        >
          Guardar vehiculo
        </button>
      </form>
    </div>
  );
};

export default Articulos;
