const Saludo = (props) => {
	return (
		<div className="card text-center container my-3">
			<div className="card-header">Empleado N°{props.id}</div>
			<div className="card-body">
				<h5 className="card-title">{props.nombre}</h5>
				<p className="card-text">
					Edad: {props.edad} años
                    <br />
                    Profesión: {props.profesion}
				</p>
				<a href="#" className="btn btn-primary">
					Ver más
				</a>
			</div>
			<div className="card-footer text-body-secondary">Estado: {props.estado}</div>
		</div>
	);
};

export default Saludo;