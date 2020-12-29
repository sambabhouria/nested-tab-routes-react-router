import React, {Component} from 'react'
import { Switch, Route, Link, } from "react-router-dom";
import './App.css';


const Profile = () => <div>You're on the Profile Tab</div>;
const Comments = () => <div>You're on the Comments Tab</div>;
const Contact = () => <div>You're on the Contact Tab</div>;


class App extends Component {
  render() {
        const { path } = this.props.match;
        // var isActive = this.context.router.route.location.pathname === this.props.to;
        // var link = 'isActive' ? 'active' : ''

        const { location } = this.props;
        const homeClass = location.pathname === "/home" ? "active" : "";
        const aboutClass = location.pathname.match("comments$") ? "active" : "";
        const contactClass = location.pathname.match("contact$") ? "active" : "";
    return (
      <div>
      <h1>Hey welcome to the tabs site!</h1>
      <ol>
       <li><Link to={`${path}`} className={homeClass}>Profile</Link></li>
       <li> <Link to={`${path}/comments`} className={aboutClass}>Comments</Link></li>
       <li> <Link to={`${path}/contact`} className={contactClass}>Contact</Link></li>
      </ol>
      <div className="tabs">
        <Switch>
          <Route path={`${path}`} exact component={Profile} />
          <Route path={`${path}/comments`} component={Comments} />
          <Route path={`${path}/contact`} component={Contact} />
         </Switch>
      </div>
    </div>
    );
  }
}

export default App;
