import { useParams, Link } from 'react-router-dom';
import { getProjectById } from '../data';
import { Footer } from '../components';
import styles from './ProjectDetail.module.css';

export const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return (
      <div className={styles.notFound}>
        <h1>Project Not Found</h1>
        <p>The project you're looking for doesn't exist.</p>
        <Link to="/" className={styles.backLink}>
          ← Back to Home
        </Link>
      </div>
    );
  }

  const isBlogArticle = project.sections && project.sections.length > 0;

  return (
    <>
      <main className={styles.main}>
        <article className={styles.article}>
          <header className={styles.header}>
            <h1 className={styles.title}>{project.title}</h1>
            {project.subtitle && (
              <p className={styles.subtitle}>{project.subtitle}</p>
            )}
          </header>

          {(project.id === 'fishermans-bend' || project.id === 'melton-housing' || project.id === 'sunshine-north') && project.coverImage && (
            <div className={styles.heroImage}>
              <img src={project.coverImage} alt={project.title} />
            </div>
          )}
          {project.id === 'asparagus-town' && project.coverImage && (
            <div className={styles.heroImageFull}>
              <img src={project.coverImage} alt={project.title} />
            </div>
          )}

          {isBlogArticle ? (
            <div className={styles.articleLayout}>
              <div className={styles.articleContent}>
                {project.sections!.map((section, index) => (
                  <section key={index} className={styles.articleSection}>
                    {section.label && section.label !== "Research Details" && (
                      <h2 className={styles.sectionLabel}>{section.label}</h2>
                    )}
                    <div className={styles.sectionContent}>
                      {section.content.trim().split('\n\n').map((paragraph, pIndex) => {
                        const isNumberedSubtitle = /^\d+ — ./.test(paragraph);
                        return (
                          <p key={pIndex} className={isNumberedSubtitle ? styles.subtitle : styles.paragraph}>{paragraph}</p>
                        );
                      }                      )}
                    </div>
                    {project.id === 'asparagus-town' && (
                      <>
                        {index === 4 && (
                          <div className={styles.imagePlaceholderFull}><img src="/Asparagus-context.png" alt="Asparagus Context" /></div>
                        )}
                        {index === 12 && (
                          <>
                            <div className={styles.imagePlaceholderFull}><img src="/Asparagus-stall-1.jpg" alt="Fresh Vegetable Stall" /></div>
                            <div className={styles.imagePlaceholderFull}><img src="/Asparagus-stall-2..jpg" alt="Fresh Vegetable Stall" /></div>
                            <div className={styles.imagePlaceholderFull}><img src="/Asparagus-stall-3..jpg" alt="Fresh Vegetable Stall" /></div>
                          </>
                        )}
                      </>
                    )}
                    {project.id === 'fishermans-bend' && project.coverImage && (
                      <>
                        {index === 4 && <div className={styles.imagePlaceholder}><img src="/fishermans bend Conceptual Framework2-01.jpg" alt="Context & Research" /></div>}
                        {index === 10 && <div className={styles.imagePlaceholder}><img src="/fishermans bend Conceptual Framework2-02.jpg" alt="Strategy" /></div>}
                      </>
                    )}
                    {project.id === 'sunshine-north' && (
                      <>
                        {index === 4 && <div className={styles.imagePlaceholder}><img src="/Sunshine context map.jpg" alt="Context & Research" /></div>}
                        {index === 10 && <div className={styles.imagePlaceholder}><img src="/Sunshine frame workplan.jpg" alt="Strategy" /></div>}
                        {index === 12 && <div className={styles.imagePlaceholder}><img src="/sunshine sections-04.jpg" alt="Slow the Street" /></div>}
                        {index === 13 && <div className={styles.imagePlaceholder}><img src="/sunshine p4 3d-01.jpg" alt="Integrate Land-Use Edges" /></div>}
                        {index === 14 && (
                          <>
                            <div className={styles.imagePlaceholder}><img src="/sunshine sections-03.jpg" alt="Berkshire Road Transition Zone" /></div>
                            <div className={styles.imagePlaceholder}><img src="/sunshine sections-01.jpg" alt="Berkshire Road Transition Zone" /></div>
                          </>
                        )}
                      </>
                    )}
                    {(project.id === 'public-library' || project.id === 'rethinking-the-city' || project.id === 'economy-and-city' || project.id === 'elsternwick') && index === 1 && project.coverImage && (
                      <div className={styles.imagePlaceholder}>
                        <img src={project.coverImage} alt="Research" />
                      </div>
                    )}
                  </section>
                ))}
                {project.documents && project.documents.length > 0 && (
                  <div className={styles.articleSection}>
                    <div className={styles.sectionContent}>
                      {project.documents.map((doc, i) => (
                        <p key={i} className={styles.paragraph}>
                          <a href={doc.url} target="_blank" rel="noopener noreferrer">{doc.title}</a>
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <aside className={styles.sidebar}>
                {project.id === 'public-library' && (
                  <>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Research</h3>
                      <p className={styles.sidebarValue}>Public Libraries — City of Melton</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Type</h3>
                      <p className={styles.sidebarValue}>Community Infrastructure Research</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Role</h3>
                      <p className={styles.sidebarValue}>Individual Research</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Methods</h3>
                      <p className={styles.sidebarValue}>Demographic analysis · Literature review · Community infrastructure analysis · Spatial mapping</p>
                    </div>
                  </>
                )}
                {project.id === 'rethinking-the-city' && (
                  <>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Research</h3>
                      <p className={styles.sidebarValue}>Compact Cities, Nature, Urban Spaces and COVID-19 Pandemic</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Type</h3>
                      <p className={styles.sidebarValue}>Critical Urban Planning Research</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Role</h3>
                      <p className={styles.sidebarValue}>Individual academic research</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Key themes</h3>
                      <p className={styles.sidebarValue}>Compact cities · 15-minute city · Urban nature · Public space · Active transport · Community · Urban resilience</p>
                    </div>
                  </>
                )}
                {project.id === 'economy-and-city' && (
                  <>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Title</h3>
                      <p className={styles.sidebarValue}>Economic Profile — Western Metro Region of Melbourne Metropolitan</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Type</h3>
                      <p className={styles.sidebarValue}>Individual economic and regional planning research</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Study area</h3>
                      <p className={styles.sidebarValue}>Western Metropolitan Melbourne</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Focus</h3>
                      <p className={styles.sidebarValue}>Economic profile · Employment · Industry concentration · Regional competitiveness · Economic clusters · Strategic planning</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Data</h3>
                      <p className={styles.sidebarValue}>ABS Census — Place of Work data, 2011 and 2021</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Methods</h3>
                      <p className={styles.sidebarValue}>Location Quotient · Shift-Share Analysis · Cluster Theory Analysis</p>
                    </div>
                  </>
                )}
                {project.id === 'elsternwick' && (
                  <>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Project</h3>
                      <p className={styles.sidebarValue}>Elsternwick Activity Centre Case Study</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Location</h3>
                      <p className={styles.sidebarValue}>Elsternwick, Melbourne</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Type</h3>
                      <p className={styles.sidebarValue}>Activity Centre Research / Urban Analysis</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Role</h3>
                      <p className={styles.sidebarValue}>Collaborative Research Project</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Team</h3>
                      <p className={styles.sidebarValue}>Anagha Khude · Natsumi Maeda · Phillip Mai</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Focus</h3>
                      <p className={styles.sidebarValue}>Activity centres · Public realm · Transport · Walking · Cycling · Open space · Landscape · Urban character</p>
                    </div>
                  </>
                )}
                {project.id === 'fishermans-bend' && (
                  <>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Project Type</h3>
                      <p className={styles.sidebarValue}>Strategic Planning · Industrial Planning · Urban Design</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Location</h3>
                      <p className={styles.sidebarValue}>Fishermans Bend, Melbourne, Victoria</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Year</h3>
                      <p className={styles.sidebarValue}>2024</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Role</h3>
                      <p className={styles.sidebarValue}>Planning Research · Spatial Analysis · Strategic Planning · Urban Design</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Project Format</h3>
                      <p className={styles.sidebarValue}>Team Project</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Team</h3>
                      <p className={styles.sidebarValue}>Anagha Khude · Jenny Yang · Mohanapriya MJ</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Tools</h3>
                      <p className={styles.sidebarValue}>GIS · Spatial Mapping · Spatial Analysis · Diagramming · Urban Design</p>
                    </div>
                  </>
                )}
                {project.id === 'melton-housing' && (
                  <>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Project Type</h3>
                      <p className={styles.sidebarValue}>Strategic Housing Planning · Housing Policy · Urban Planning</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Location</h3>
                      <p className={styles.sidebarValue}>Melton, Victoria</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Year</h3>
                      <p className={styles.sidebarValue}>2024</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Role</h3>
                      <p className={styles.sidebarValue}>Team Project</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Team</h3>
                      <p className={styles.sidebarValue}>Anagha Khude · Samuel Granger · Adam Ali · John Momis</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Key Themes</h3>
                      <p className={styles.sidebarValue}>Affordable Housing · Housing Diversity · Growth Areas · Land Regeneration · Planning Policy · Partnerships · Connectivity · Inclusive Communities</p>
                    </div>
                  </>
                )}
                {project.id === 'sunshine-north' && (
                  <>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Project Type</h3>
                      <p className={styles.sidebarValue}>Industrial Precinct Planning · Mobility Planning · Urban Design · Active Transport Planning</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Location</h3>
                      <p className={styles.sidebarValue}>Sunshine North, Victoria</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Year</h3>
                      <p className={styles.sidebarValue}>2024</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Role</h3>
                      <p className={styles.sidebarValue}>Urban Planning & Urban Design</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Project Format</h3>
                      <p className={styles.sidebarValue}>Collaborative Team Project</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Team</h3>
                      <p className={styles.sidebarValue}>Anagha Khude · Rif</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Scale</h3>
                      <p className={styles.sidebarValue}>Suburb → Precinct → Street → Intervention</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Tools</h3>
                      <p className={styles.sidebarValue}>GIS · Spatial Analysis · Mapping · Urban Design · Street Design · Diagramming</p>
                    </div>
                  </>
                )}
                {project.id === 'asparagus-town' && (
                  <>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Project Type</h3>
                      <p className={styles.sidebarValue}>Agropolitan Planning · Rural–Urban Planning · Urban Design</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Location</h3>
                      <p className={styles.sidebarValue}>Koo Wee Rup, Victoria</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Year</h3>
                      <p className={styles.sidebarValue}>2024</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Role</h3>
                      <p className={styles.sidebarValue}>Individual Project</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Focus</h3>
                      <p className={styles.sidebarValue}>Agriculture · Mobility · Ecology · Public Realm</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Key Interventions</h3>
                      <p className={styles.sidebarValue}>5 km Landscape Framework · 40 km/h Reduced-Speed Zone · Walking & Cycling Network · Fresh Vegetable Stalls · Bio-links · Ecological Habitat Consideration</p>
                    </div>
                    <div className={styles.sidebarSection}>
                      <h3 className={styles.sidebarLabel}>Tools</h3>
                      <p className={styles.sidebarValue}>GIS · Spatial Analysis · Mapping · Urban Design · Landscape Planning · Diagramming</p>
                    </div>
                  </>
                )}
              </aside>
            </div>
          ) : (
            <div className={styles.articleLayout}>
              <div className={styles.articleContent}>
                <section className={styles.articleSection}>
                  <h2 className={styles.sectionLabel}>Overview</h2>
                  <div className={styles.sectionContent}>
                    <p className={styles.paragraph}>{project.overview}</p>
                  </div>
                </section>
                <section className={styles.articleSection}>
                  <h2 className={styles.sectionLabel}>Objectives</h2>
                  <div className={styles.sectionContent}>
                    {project.objectives.map((objective, index) => (
                      <p key={index} className={styles.paragraph}>{objective}</p>
                    ))}
                  </div>
                </section>
                <section className={styles.articleSection}>
                  <h2 className={styles.sectionLabel}>Approach</h2>
                  <div className={styles.sectionContent}>
                    <p className={styles.paragraph}>{project.approach}</p>
                  </div>
                </section>
                <section className={styles.articleSection}>
                  <h2 className={styles.sectionLabel}>Outcomes</h2>
                  <div className={styles.sectionContent}>
                    <p className={styles.paragraph}>{project.outcomes}</p>
                  </div>
                </section>
                {project.images.length > 0 && (
                  <section className={styles.articleSection}>
                    <div className={styles.imagePlaceholder}>
                      <img src={project.images[0]} alt={project.title} />
                    </div>
                  </section>
                )}
              </div>
              <aside className={styles.sidebar}>
                <div className={styles.sidebarSection}>
                  <h3 className={styles.sidebarLabel}>Type</h3>
                  <p className={styles.sidebarValue}>{project.discipline.join(' + ')}</p>
                </div>
                <div className={styles.sidebarSection}>
                  <h3 className={styles.sidebarLabel}>Location</h3>
                  <p className={styles.sidebarValue}>{project.location}</p>
                </div>
                <div className={styles.sidebarSection}>
                  <h3 className={styles.sidebarLabel}>Year</h3>
                  <p className={styles.sidebarValue}>{project.year}</p>
                </div>
              </aside>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
};
