import React, {useState, useEffect} from 'react';
import api from '../api.js';
import '../assets/sass/styles.scss';
import { Link } from "react-router-dom";


export default function ArchivedCalls() {
	const[calls, setCalls] = useState([]);
	const[archived, setArchived] = useState([]);

	useEffect(() => {
		getAllCalls();
		getDate();
		getTime();
		setTimeout(archivedCalls, 1500);
	},[])

	const getAllCalls = async () => {
		try {
			const response = await api.getAllActivities();
			setCalls(response);
			// console.log(calls);
		}
		catch (err) {
			console.log(err);
		}
	}
	const getDate = (dat) => {
		let date = new Date(dat).toDateString("en-US").split("/");
		// console.log(date);
		return (date);
	}

	const getTime = (dat) => {
		let [hour, minute] = new Date(dat).toLocaleTimeString().split(/:| /);
		let time = `${hour}:${minute}`;

		return (time);
	}

	const archivedCalls = () => {
		try {
			let data = calls.filter(call => call.is_archived === true);
			console.log(data);
			setArchived(data);
		}
		catch (err) {
			console.log(err);
		}
	}

	return (
		<div className="box-container">
			{ archived.map((call, index) => (
				<div key={ index }>
					<div className="date-line">
						<p>{ getDate(call.created_at) }</p>
						<div className="line"></div>
					</div>
					<Link className="box-calls call" to={`/call/${call.id}`}>

						<div style={{flexGrow: '1'}} className="box-icons-calls">
							<div>
								<span  className={ call.call_type === 'answered' ? 'answered-call' : 'missed-call' } >
							</span>
							</div>
						</div>
						<div className="numphone-text" style={ {flexGrow: '1'} }>
							<span className="numphone">
							{ call.from } <p className="calls-attempts">2</p>
							</span>
							<p className="tried-to-call">tried to call on <span>{ call.to === null ? 'Unknown' : call.to }</span></p>
						</div>
						<div className="time" style={{flexGrow: '8'}}>
							{ getTime(call.created_at) }
							<span>{ getTime(call.created_at) >= 12 ? 'P.M' : 'A.M' }</span>
						</div>
					</Link>
				</div>
			))}
		</div>
		);
}