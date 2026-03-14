interface TeamMember {
  name: string
  title: string
  credentials: string
  bio: string
  hours?: string | null
}

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="team-card group">
      {/* Initials avatar */}
      <div className="w-16 h-16 bg-navy flex items-center justify-center mb-5
                      group-hover:bg-red transition-colors duration-300">
        <span className="font-display font-black text-2xl text-white">
          {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
        </span>
      </div>

      <div className="mb-1">
        <h3 className="font-display font-bold text-xl text-navy uppercase tracking-wide">
          {member.name}
        </h3>
        <div className="font-mono text-xs text-red tracking-wider uppercase mt-0.5">
          {member.title}
        </div>
      </div>

      {member.hours && (
        <div className="flex items-center gap-2 mt-2 mb-3">
          <span className="font-display font-black text-3xl text-navy">{member.hours}</span>
          <span className="font-mono text-[10px] text-slate-hrh uppercase tracking-widest leading-tight">
            Accident-Free<br />Flight Hours
          </span>
        </div>
      )}

      <div className="font-mono text-[10px] text-slate-light uppercase tracking-widest mb-3 leading-relaxed">
        {member.credentials}
      </div>

      <p className="font-body text-sm text-navy/70 leading-relaxed">
        {member.bio}
      </p>
    </div>
  )
}
