import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import api from '../api.js';


export default function ActivityDetail() {
    const { id } = useParams();
    const[call, setCall] = useState([]);

    useEffect(() => {
        getCallDetail();
    }, []);

    const getCallDetail = async () => {
        try {
            const response = await api.getActivityID(id);
            console.log(response);
            setCall(response);
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="box-container">
            <div className="call-image">
                <span className="user-profile"></span>
                <p className="from">{call.from}</p>
            </div>
            <div className="call-number">
                <div  style={{margin: '10px', textAlign: 'initial'}}>
                    <p>To: {call.to}</p>
                    <p>Country: {call.via}</p>
                    <p>Duration: {call.duration} seconds</p>
                </div>
            </div>
            <div className="call-box-history">
                <div className="box-history">
                    <span>
                        <img className={call.direction === 'inbound' ? 'recived-call' : 'outbound'} />
                    </span>
                    <div>
                        <p>{call.to}</p>
                        <p>Mobile</p>
                    </div>
                </div>  
            </div>  
        </div>
        );
}