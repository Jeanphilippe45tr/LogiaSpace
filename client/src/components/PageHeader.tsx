import { Link } from 'react-router-dom';

interface PageHeaderProps {
  title: string;
  parent?: string;
  parentTo?: string;
  breadcrumb?: string;
}

export default function PageHeader({ title, parent, parentTo, breadcrumb }: PageHeaderProps) {
  return (
    <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: 90 }}>
      <div className="row py-5">
        <div className="col-12 pt-lg-5 mt-lg-5 text-center">
          <h1 className="display-4 text-white animated zoomIn">{title}</h1>
          <Link to={parentTo || '/'} className="h5 text-white">
            {parent || 'Home'}
          </Link>
          <i className="far fa-circle text-white px-2"></i>
          <span className="h5 text-white">{breadcrumb || title}</span>
        </div>
      </div>
    </div>
  );
}
