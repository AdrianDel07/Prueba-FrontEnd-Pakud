import Request from 'axios-react';

const Network = () => (
	<div>
		<Request
	    config={{
	      method: 'get',
	      url: 'https://aircall-job.herokuapp.com/activities',
	    }}
	  >
	    {({ loading, networkStatus }) => (
	      <div>
	          {networkStatus && <span>{networkStatus}</span>}
	          {loading && <span>Loading...</span>}
	      </div>
	    )}
	  </Request>
	</div>
	);

export default Network;