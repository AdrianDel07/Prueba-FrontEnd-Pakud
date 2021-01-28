import React, {useState, useEffect} from 'react';
import api from '../api.js';
import '../assets/sass/styles.scss';
import call from '../assets/img/call.svg';

function Footer() {
    const[data, setData] = useState([]);

    useEffect(() => {
        getAllData();
    },[])

    const getAllData = async () => {
        const response = await api.getAllActivities();
        setData(response);
        // console.log(data);
    }

    return (
		<div>
			<ul className="footer">
		        <li className="line">
                    <span className="calls">
                        <img src={call} alt="call" />
                        <p className="calls-number calls-position">{data.length}</p>
                    </span>     
			    </li>
			    <li className="user pointer"></li>
			    <li className="dialpad pointer"> </li>
                <li className="settings pointer" ></li>
                <li className="point pointer" ></li>
			</ul>
		</div>
		)
}

export default Footer;