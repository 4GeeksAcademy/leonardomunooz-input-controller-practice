import React, {useEffect, useState} from "react";

const initialState = {
		"name"	:"",
		"email"	:"",
		"phone"	:""
}

//create your first component
const Home = () => {

	const [contact,setContact] = useState(initialState);

	const [contactList,setContactList] = useState([
		{
			"name"	:"leonardo munoz",
			"email"	:"leonardonms1331@gmail.com	",
			"phone"	:"04244420282"
	}

	])


	const handleChange=(e)=>{
			setContact({
				...contact,
				[e.target.name]:e.target.value
			})
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		if(contact.name.trim() == "" || contact.email.trim() == "" || contact.phone.trim() == ""){
			console.log("todos los campo son obligatorios")
			return
		}
		setContactList([...contactList,contact])
		console.log(setContact(initialState))
	}
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-12">
					<h1 className="text-center mt-3">Aplicacion de contactos</h1>
				</div>
				<div className="col-12 col-md-7">
					<form 
						className="border  p-4 rounded rounde-1"
						onSubmit={handleSubmit}
					>	
						<div className="form-group mt-3">
							<label htmlFor="nombre">Nombre completo:</label>
							<input 
								type="text"
								className="form-control"
								id="nombre"
								placeholder="Leonardo munoz"
								name="name"
								value={contact.name}
								onChange={handleChange}
							/>
						</div>
						<div className="form-group mt-3">
							<label htmlFor="txtEmail">Correo electronico</label>
							<input 
								type="text"
								className="form-control"
								id="txtEmail"
								placeholder="leonardo@gmail.com"
								name="email"
								onChange={handleChange}
							/>
						</div>
						
						<div className="form-group mt-3">
							<label htmlFor="txtTelefono">Numero de telefono</label>
								<input 
									type="text"
									className="form-control"
									id="txtTelefono"
									placeholder="+58 412 83334"
									name="phone"
									onChange={handleChange}
								/>
						</div>
						<button 
								type="submit"
								className="btn btn-success w-100 mt-3"
							>Guardar contactos</button>
					</form>
				</div>
				<div className="col-12 col-md-7">
					<ul className="list-group mt-4 bg-light" style={{"max-width": "600px"}}>
						
						{
							contactList.map((item,index)=>{
								return (
									<li className="list-group-item">
									
										<p className="card-header border rounded-bottom">Contacto</p>
										<p className="">Nombre: {item.name }</p>
										<p>email: {item.email }</p>
										<p>phone: {item.phone }</p>
									</li>
								)
							})
						}
					</ul>

				</div>
			</div>
		</div>
	);
};

export default Home;


