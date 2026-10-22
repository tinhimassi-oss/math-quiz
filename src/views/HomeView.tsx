import React from 'react';
import { MAJOR_DOMAINS } from '../data/mathCategories';
import { DomainCard } from '../components/DomainCard';

interface HomeViewProps {
  onSelectDomain: (domainId: string) => void;
  onOpenSearch?: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectDomain,
}) => {
  return (
    <div className="space-y-6 pb-16 pt-2">
      {/* Domain Cards Grid: 3 columns layout */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {MAJOR_DOMAINS.map((domain, idx) => (
            <DomainCard
              key={domain.id}
              domain={domain}
              index={idx}
              onClick={() => onSelectDomain(domain.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

