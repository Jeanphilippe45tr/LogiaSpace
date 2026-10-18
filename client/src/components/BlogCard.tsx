interface BlogCardProps {
  title: string;
  category: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
}

export default function BlogCard({ title, category, author, date, image, excerpt }: BlogCardProps) {
  return (
    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
      <div className="blog-item bg-light rounded overflow-hidden">
        <div className="blog-img position-relative overflow-hidden">
          <img className="img-fluid" src={image} alt={title} />
          <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="/blog">
            {category}
          </a>
        </div>
        <div className="p-4">
          <div className="d-flex mb-3">
            <small className="me-3">
              <i className="far fa-user text-primary me-2"></i>{author}
            </small>
            <small>
              <i className="far fa-calendar-alt text-primary me-2"></i>{date}
            </small>
          </div>
          <h4 className="mb-3">{title}</h4>
          <p>{excerpt}</p>
          <a className="text-uppercase" href="/detail">
            Read More <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
