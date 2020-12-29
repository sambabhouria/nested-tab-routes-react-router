import React, {Component} from 'react'
import { Switch, Route, Link, } from "react-router-dom";
import './App.css';


const Profile = () => <div>You're on the Profile Tab</div>;
const Comments = () => <div>You're on the Comments Tab</div>;
const Contact = () => <div>You're on the Contact Tab</div>;


class App extends Component {
  render() {
        const { path } = this.props.match;
        console.log("🚀 ~ file: App.js ~ line 14 ~ App ~ render ~ path", path)
        // var isActive = this.context.router.route.location.pathname === this.props.to;
        // var link = 'isActive' ? 'active' : ''

        const { location } = this.props;
        const homeClass = location.pathname === "/profiles" ? "active" : "";
        const aboutClass = location.pathname.match("comments$") ? "active" : "";
        const contactClass = location.pathname.match("contact$") ? "active" : "";
    return (
      <div>
      <h3>Hey welcome to the tabs site!</h3>
      <div className='mobile'>
        <ol>
        <li><Link to={`/profiles`} className={homeClass} style={{marginLeft: '-40px'}}>Profile</Link></li>
        <li> <Link to={`/comments`} className={aboutClass}>Comments</Link></li>
        <li> <Link to={`/contact`} className={contactClass}>Contact</Link></li>
        </ol>
        <div className="tabs">
          <Switch>
            <Route path={`/profiles`} exact component={Profile} />
            <Route path={`/comments`} component={Comments} />
            <Route path={`/contact`} component={Contact} />
          </Switch>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
