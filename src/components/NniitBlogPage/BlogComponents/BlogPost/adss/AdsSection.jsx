import { ADS_DATA } from '../ads';
import AdCard from './AdCard';

function AdsSection() {
  return (
    <div className="col-span-3 bg-[#EAF0FD]">
      <div className="sticky top-8 space-y-6">
        {ADS_DATA.map((ad) => (
          <AdCard key={ad.id} {...ad} />
        ))}
      </div>
    </div>
  );
}

export default AdsSection;