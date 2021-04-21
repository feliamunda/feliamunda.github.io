import './Portfolio.scss'

// const projects = [1,2,3]
// const list_projects = projects.map(el => <div className="card" key={el}>{el}</div>)

function Portfolio() {
    return (
      <section id="portfolio" className="row mb-5">
        <div className="col-12">
          <h2 className="h1">Portfolio</h2>
        </div>
        <div className="d-grid col-12 offset-sm-3 col-sm-6">
          <div className="row px-3">
            <a className="btn btn-dark col-5" role="button" href="http://github.com/feliamunda" target="_blank" rel="noreferrer">Github</a>
            <a className="btn btn-dark col-5 offset-2" role="button"href="http://gitlab.com/feliamunda" target="_blank" rel="noreferrer">GitLab</a>
          </div>
        </div>
      </section>
    );
  }
  
export default Portfolio;