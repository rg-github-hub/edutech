export default function AboutUs(){
    return <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
      <div className="card h-100">
        <img src={require("/Users/rahul/edutech/src/media/about1.jpeg")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Distance Learning</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100">
        <img src={require("/Users/rahul/edutech/src/media/idea.jpeg")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Incubate and Collaborate on Ideas</h5>
          <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100">
        <img src={require("/Users/rahul/edutech/src/media/pocket.jpeg")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">98% Positive Feedback</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  </div>
}