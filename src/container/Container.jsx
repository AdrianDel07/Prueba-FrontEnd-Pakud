import { Switch, Route } from "react-router-dom";
import ActivityFeed from '../components/ActivityFeed';
import ActivityDetail from '../components/ActivityDetail';
import ArchivedCalls from '../components/ArchivedCalls';

export default function Container() {
  return (
    <div>
      <Switch>
        <Route exact path={["/", "/calls"]} component={ActivityFeed} />
        <Route exact path={"/call/:id"} component={ActivityDetail} />
        <Route exact path={"/archived_Calls/"} component={ArchivedCalls} />
      </Switch>
    </div>
  );
}