import image from '../assets/VP LOGO.png'
const NewsItem = ({title, description, src, url}) => {
  return (
   <div className="card bg-dark text-light mb-3 d-inline-block my-4 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
  <img src={src?src:image} className="card-img-top" alt="..."/>
  <div className="card-body">

  <h5 className="card-title">{title? title.slice(0,50):"NEWS"}</h5>
    <p className="card-text">{description?description.slice(0,90):"Traffic from search engines, social media, and email depends on the headline. It needs to spark curiosity and convey a benefit to earn your reader’s attention, all in a single sentence."}</p> 
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem

