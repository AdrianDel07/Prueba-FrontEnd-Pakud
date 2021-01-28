import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ActivityFeed from '../components/ActivityFeed';
import ActivityDetail from '../components/ActivityDetail';

export default function Container() {
  return (
    <div>
      <Switch>
        <Route exact path={["/", "/calls"]} component={ActivityFeed} />
        <Route exact path={"/call/:id"} component={ActivityDetail} />
      </Switch>
    </div>
  );
}