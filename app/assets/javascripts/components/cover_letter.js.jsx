
var contact_method = function(){
  var d = new Date();
if(8 < d.getHours() && d.getHours()< 20){
  return "You can call me at 305-453-2345 right now."
}else{
  return "You can e-mail me by clicking the \"Let's talk!\" button below."
}}



var CoverPage = React.createClass({
  render: function() {
    return (
      <div className="container">
        <NavBar/>
        <CoverBox job = {this.props.job} number={this.props.number}/>
      </div>
    );
  }
})

var NavBar = React.createClass({
  render: function() {
    return (
      <div>
      <div className="header clearfix">
        <nav>
          <ul className="nav nav-pills pull-right">
            <li role="presentation"><a href="#" target="_blank">About</a></li>
            <li role="presentation"><a href="https://github.com/jmopr/job-hunter" target="_blank">Source Code</a></li>
            <li role="presentation"><a href="mailto:jmopr83@gmail.com?subject=AwesomeWeShouldTalk">
              Contact</a></li>
            </ul>
          </nav>
          <h3 className="text-muted">The Job-Hunter</h3>
      </div>
      <hr></hr>
      </div>
    );
  }
})
var CoverBox = React.createClass({
  render: function(){
    return(
      <div className="jumbotron">
        <div id="profile-pic">
          <h1 id="hello">Hello, {this.props.job.company}!</h1>
        </div>

        <div className="center-internal">
          <img src={this.props.job.logo} alt="Logo"/>
        </div>
        <div className="grid-of-stats">
          <div className="match block">
            {this.props.job.score}% <br/>
            <span>Match</span>
          </div>
          <div className="loc block" >
            <div id="number-lines"></div>
            <span>Lines of Ruby written</span>
          </div>

          <div className="loc block">
            <div id="number-projects"></div><br/>
          <span>Github Projects</span>
          </div>
        </div>
        <div className="clearfix"></div>
        <p>
          Hi!
        </p>
        <p>I'm happy that you're reading this. I think it would be awesome to work at <strong>{this.props.job.company}</strong> as a <strong>{this.props.job.title}</strong>. We should really talk about the job you posted <a href="#">here</a>. {contact_method()}
        </p>
        <p>
          Thanks again,<br></br>
          Juan
        </p>
      <p>
        <a className="btn btn-lg btn-success btn-block" href="mailto:jmopr83@gmail.com?subject=Re:+Your+application+to+Spotify" role="button">Let's talk!</a>
      </p>
      </div>

    );
  }
})
