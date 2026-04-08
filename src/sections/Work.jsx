const PROJECTS = [
  {
    num: '01',
    name: 'ShopVista',
    category: 'Web Design & Development',
    toolsLabel: 'Tools and features',
    tools: 'React, Tailwind, Node.js, MongoDB',
    image: '/proj-1.png',
    link: '#',
  },
  {
    num: '02',
    name: 'DataPulse',
    category: 'Dashboard & Analytics',
    toolsLabel: 'Tools and features',
    tools: 'React, D3.js, Express, PostgreSQL',
    image: '/proj-2.png',
    link: '#',
  },
  {
    num: '03',
    name: 'ConnectSphere',
    category: 'Social Platform',
    toolsLabel: 'Tools and features',
    tools: 'React, TypeScript, GraphQL, Firebase',
    image: '/proj-3.png',
    link: '#',
  },
]

export default function Work() {
  return (
    <section className="work" id="work">
      <div className="work__header">
        <h2 className="work__title reveal">
          My <span>Work</span>
        </h2>
      </div>

      <div className="work__grid">
        {PROJECTS.map((p) => (
          <article className="work__item" key={p.num}>
            <div className="work__item-top">
              <span className="work__item-num">{p.num}</span>
              <div className="work__item-meta">
                <p className="work__item-name">{p.name}</p>
                <p className="work__item-category">{p.category}</p>
              </div>
            </div>

            <div>
              <p className="work__item-tools-label">{p.toolsLabel}</p>
              <p className="work__item-tools">{p.tools}</p>
            </div>

            <div className="work__item-preview">
              <img src={p.image} alt={p.name} />
              <a
                href={p.link}
                className="work__item-link"
                aria-label={`View ${p.name}`}
                target="_blank"
                rel="noreferrer"
              >
                ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
