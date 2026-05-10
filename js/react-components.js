function ProjectCard({ title, description, technologies, githubLink, demoLink, image }) {
    return (
        <div className="project-card">
            <div className="project-image">
                <img src={image} alt={title} />
                <div className="project-overlay">
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn-project">
                        <i className="fab fa-github"></i> Code
                    </a>
                    {demoLink && (
                        <a href={demoLink} target="_blank" rel="noopener noreferrer" className="btn-project">
                            <i className="fas fa-external-link-alt"></i> Démo
                        </a>
                    )}
                </div>
            </div>
            <div className="project-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="tech-tags">
                    {technologies.map((tech, index) => (
                        <span key={index} className="tag">{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

function TimelineItem({ year, title, school, description, icon }) {
    return (
        <div className="timeline-item">
            <div className="timeline-icon">
                <i className={icon || "fas fa-graduation-cap"}></i>
            </div>
            <div className="timeline-content-wrapper">
                <div className="timeline-header">
                    <span className="timeline-year">{year}</span>
                    <h3>{title}</h3>
                    <span className="timeline-school">{school}</span>
                    
                    <span className="accordion-icon">+</span>
                </div>
                <div className="timeline-body">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

function SkillBar({ name, level, color }) {
    return (
        <div className="skill-item react-skill">
            <div className="skill-info">
                <span><i className="fas fa-code"></i> {name}</span>
                <span>{level}%</span>
            </div>
            <div className="progress-bar">
                <div 
                    className="progress-fill" 
                    style={{width: '0%', backgroundColor: color || '#3498db'}} 
                    data-level={level}
                ></div>
            </div>
        </div>
    );
}

function ContactInfo({ email, phone, location }) {
    return (
        <div className="contact-details">
            <h3>Mes coordonnées</h3>
            <p><i className="fas fa-envelope"></i> {email}</p>
            <p><i className="fas fa-phone"></i> {phone}</p>
            <p><i className="fas fa-map-marker-alt"></i> {location}</p>
        </div>
    );
}

const projectsRoot = ReactDOM.createRoot(document.getElementById('projects-container'));
projectsRoot.render(
    <React.StrictMode>
        <div className="projects-grid">
        
        </div>
    </React.StrictMode>
);

const timelineRoot = ReactDOM.createRoot(document.getElementById('timeline-container'));
timelineRoot.render(
    <React.StrictMode>
        <TimelineItem 
            year="2025 - 2026"
            title="Licence L2 Informatique"
            school="Université Cadi Ayyad"
            description="Deuxième année de licence informatique, spécialité développement web. Cours avancés de programmation web, bases de données, algorithmique et structures de données."
            icon="fas fa-university"
        />
        <TimelineItem 
            year="2024 2025"
            title="Licence L1 Informatique"
            school="Université Cadi Ayyad"
            description="Première année de licence. Acquisition des fondamentaux en programmation (Python, C), mathématiques, architecture des ordinateurs et introduction aux réseaux."
            icon="fas fa-university"
        />
        <TimelineItem 
            year="2023- 2024"
            title="Baccalauréat Scientifique"
            school="Lycée Touama"
            description="Obtention du baccalauréat scientifique avec mention. Spécialité mathématiques et sciences physiques."
            icon="fas fa-school"
        />
    </React.StrictMode>
);

const skillsRoot = ReactDOM.createRoot(document.getElementById('skills-container'));
skillsRoot.render(
    <React.StrictMode>
        <div className="skills-react-grid">
            <SkillBar name="React.js" level={75} color="#61dafb" />
            <SkillBar name="Node.js" level={60} color="#68a063" />
            <SkillBar name="Git / GitHub" level={80} color="#f05032" />
        </div>
    </React.StrictMode>
);

const contactRoot = ReactDOM.createRoot(document.getElementById('react-contact-info'));
contactRoot.render(
    <React.StrictMode>
        <ContactInfo 
            email="email@example.com"
            phone="+212 6XX XXX XXX"
            location="Ville, Maroc"
        />
    </React.StrictMode>
);