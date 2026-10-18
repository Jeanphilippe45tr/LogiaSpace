interface SectionTitleProps {
  title: string;
  subtitle: string;
  center?: boolean;
}

export default function SectionTitle({ title, subtitle, center = false }: SectionTitleProps) {
  return (
    <div className={`section-title text-center position-relative pb-3 mb-5 mx-auto${center ? '' : ''}`} style={{ maxWidth: 600 }}>
      <h5 className="fw-bold text-primary text-uppercase">{title}</h5>
      <h1 className="mb-0">{subtitle}</h1>
    </div>
  );
}
