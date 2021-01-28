import React, {useState, useEffect} from 'react';
import api from '../api.js';
import '../assets/sass/styles.scss';
import { Link } from "react-router-dom";


export default function ActivityFeed() {
	const[calls, setCalls] = useState([]);

	useEffect(() => {
		getAllCalls();
		getDate();
		getTime();
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
		let [hour, minute, second] = new Date(dat).toLocaleTimeString("en-US").split(/:| /);
		let time = `${hour}:${minute}:${second}`;

		return (time);
	}

	return (
		<div className="box-container">
			<div className="box-calls box-archive">
				<div className="btn-in">
					<span className="archive"></span>
					Archive all calls
				</div>
			</div>
			
			{ calls.map((call, index) => (
				<div key={index}>
					<div className="date-line">
						<p>{getDate(call.created_at)}</p>
					</div>
					<Link className="box-calls call" to={`/call/${call.id}`}>

						<div style={{flexGrow: '1'}}>
							<span>
								<img className={call.call_type === 'answered' ? 'answered-call' : 'missed-call'} />
							</span>
						</div>
						<div className="numphone-text" style={{flexGrow: '1'}}>
							<span className="numphone">
							{call.from} <p className="calls-attempts">2</p>
							</span>
							<p className="tried-to-call">tried to call on <span>{call.to === null ? 'Unknown' : call.to}</span></p>
						</div>
						<div className="time" style={{flexGrow: '8'}}>{getTime(call.created_at)}<span>{getTime(call.created_at) >= 12 ? 'PM' : 'AM'}</span></div>
					</Link>
				</div>
			))}
		</div>
		);
}