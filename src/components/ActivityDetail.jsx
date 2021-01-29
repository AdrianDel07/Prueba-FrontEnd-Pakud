import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import api from '../api.js';
import { Link } from "react-router-dom";


export default function ActivityDetail() {
    const history = useHistory();
    const { id } = useParams();
    const[call, setCall] = useState([]);

    useEffect(() => {
        getCallDetail(id);
        getTime();
    }, []);

    const getCallDetail = async (id) => {
        try {
            const response = await api.getActivityID(id);
            // console.log(response);
            setCall(response);
        }
        catch (err) {
            console.log(err);
        }
    };

    const getTime = (date) => {
        let [hour, minute] = new Date(date).toLocaleTimeString().split(/:| /);
        let time = `${hour}:${minute}`;

        return (time);
    }

    const handleCallArchived = () => {
        try {
            const data = {
                is_archived: true
            };
            api.postArchivedCall(id, data);
            alert("succeful Archived");
            history.push('/calls');
        }
        catch (err) {
            console.log(err);
        }
 
    }

    return (
        <div className="box-container text">
            <div className="call-image">
                <button onClick={ handleCallArchived } className="arch-btn">
                    <span className="archive"></span>
                </button>
                <span className="user-profile"></span>
                <p className="from">{ call.from }</p>
            </div>
            <div className="call-number">
                <div  style={ {margin: '10px', textAlign: 'initial'} }>
                    <p>To: { call.to === null ? 'Unknown' : call.to }</p>
                    <p>Country: { call.via }</p>
                    <p>Duration: { call.duration } seconds</p>
                </div>
            </div>
            <div className="call-box-history">
                <div className="box-history">
                    <span className={ call.direction === 'inbound' ? 'recived-call' : 'outbound' }></span>
                    <div style={ {margin: '10px', textAlign: 'initial'} }>
                        <p>{ call.from }</p>
                        <p>Mobile</p>
                        <p>{ getTime(call.created_at) } <span>{ getTime(call.created_at) >= 12 ? 'P.M' : 'A.M' }</span></p>
                    </div>
                </div>  
            </div>  
        </div>
        );
}