export default function Duck({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40">
      <ellipse cx="20" cy="26" rx="14" ry="10" fill="#f5c842"/>
      <ellipse cx="20" cy="14" rx="9" ry="8" fill="#f5c842"/>
      <ellipse cx="27" cy="12" rx="5" ry="3.5" fill="#f5c842"/>
      <circle cx="17" cy="12" r="1.8" fill="#0a1628"/>
      <ellipse cx="27.5" cy="13.5" rx="3" ry="1.8" fill="#e8a020"/>
      <ellipse cx="12" cy="30" rx="4" ry="2.5" fill="#e8a020"/>
      <ellipse cx="26" cy="32" rx="4" ry="2.5" fill="#e8a020"/>
    </svg>
  )
}