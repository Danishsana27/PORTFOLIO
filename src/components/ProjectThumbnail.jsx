import { BrainCircuit, ScanEye, LayoutGrid, Binary, Sparkles } from 'lucide-react';

const CATEGORY_META = {
  'AI/ML': { icon: BrainCircuit, from: '#7C6FF0', to: '#43D9C8' },
  'Deep Learning': { icon: Sparkles, from: '#5D52C4', to: '#7C6FF0' },
  'Computer Vision': { icon: ScanEye, from: '#43D9C8', to: '#2FA99C' },
  'Java/DSA': { icon: Binary, from: '#43D9C8', to: '#7C6FF0' },
  Other: { icon: LayoutGrid, from: '#8B93A7', to: '#43D9C8' }
};

export default function ProjectThumbnail({ category, image, title }) {
  if (image) {
    return <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />;
  }

  const meta = CATEGORY_META[category] || CATEGORY_META.Other;
  const Icon = meta.icon;

  return (
    <div
      className="flex h-full w-full items-center justify-center"
      style={{
        background: `linear-gradient(135deg, ${meta.from}22, ${meta.to}11)`
      }}
    >
      <div
        className="flex h-14 w-14 items-center justify-center rounded-2xl"
        style={{ background: `linear-gradient(135deg, ${meta.from}, ${meta.to})` }}
      >
        <Icon size={26} color="#0A0E14" strokeWidth={2} />
      </div>
    </div>
  );
}
