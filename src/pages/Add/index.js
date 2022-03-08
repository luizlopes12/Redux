import React, {useState} from 'react';
import { addCar } from '../../store/cars';
import { showMessage, hideMessage } from '../../store/layout';
import { useDispatch } from 'react-redux';
export default function Add() {

	const [form, setForm] = useState({name: '', url: ''})
	const dispatch = useDispatch()
	const formChange = (e) =>{
		setForm({...form, [e.target.name]: e.target.value})
	}
	const onSubmit = (e) =>{
		e.preventDefault()
		dispatch(addCar(form))
		setForm({name: '', url:''})
		dispatch(showMessage())
		setTimeout(()=> {dispatch(hideMessage())},2500)
	}
	return (
		<form className="container mt-5" onSubmit={onSubmit}>
			<div className="form-group">
				<label>Nome</label>
				<input type="text" onChange={formChange} name="name" value={form.name} className="form-control" placeholder="Nome..." />
			</div>
			<div className="form-group">
				<label>URL:</label>
				<input type="text" onChange={formChange} name="url" value={form.url} className="form-control" placeholder="URL:https://cars" />
			</div>
			<button type="submit" className="btn btn-primary">
				Adicionar
			</button>
		</form>
	);
}
