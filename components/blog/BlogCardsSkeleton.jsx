export function BlogCardsSkeleton({ count = 3, className = "bb-grid" }) {
  return (
    <div className={className} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="bb-skeleton-card">
          <div className="bb-skeleton-card__img" />
          <div className="bb-skeleton-card__body">
            <div className="bb-skeleton-line bb-skeleton-line--short" />
            <div className="bb-skeleton-line bb-skeleton-line--title" />
            <div className="bb-skeleton-line" />
            <div className="bb-skeleton-line bb-skeleton-line--medium" />
          </div>
        </div>
      ))}
    </div>
  );
}
