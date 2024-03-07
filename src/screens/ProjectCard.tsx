export default function ProjectCard(props: any) {
  return (
    <a href={props.webpage} className="project-card">
      <div className="project-card-top">
        <h1>{props.title}</h1>
        <p>{props.summary}</p>
      </div>
      <div className="project-card-bottom">
        <img src={props.image} alt={props.imageTitle} />
        <div className="overlay"></div>
      </div>
    </a>
  );
}
