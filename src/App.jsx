import Saludo from './Saludo';

const App = () => {
	const Empleados = [
		{id: 1, nombre: 'Juan', edad: 25, profesion: 'Ingeniero', estado: 'Activo'},
		{
			id: 2,
			nombre: 'Ana',
			edad: 30,
			profesion: 'Licenciada',
			estado: 'Inactivo',
		},
	];
	return (
		<div>
			<Saludo
				id={Empleados[0].id}
				nombre={Empleados[0].nombre}
				edad={Empleados[0].edad}
				profesion={Empleados[0].profesion}
				estado={Empleados[0].estado}
			/>

			<Saludo
				id={Empleados[1].id}
				nombre={Empleados[1].nombre}
				edad={Empleados[1].edad}
				profesion={Empleados[1].profesion}
				estado={Empleados[1].estado}
			/>
		</div>
	);
};

export default App;
