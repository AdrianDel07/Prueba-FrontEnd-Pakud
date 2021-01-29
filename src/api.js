import axios from 'axios';

const url = 'https://aircall-job.herokuapp.com/activities';

// GET ALL Calls Activities
const getAllActivities = () => {
	return axios.get(url)
		.then(response => response.data);
}

// GET Call Activity by ID
const getActivityID = (id) => {
	return axios.get(`${url}/${id}`)
		.then(response => response.data);
}

// POST Archived Call Activity by ID
const postArchivedCall = (id, data) => {
	return axios.post(`${url}/${id}`, data)
		.then(response => response.data);
}

export default {
	getAllActivities,
	getActivityID,
	postArchivedCall
};