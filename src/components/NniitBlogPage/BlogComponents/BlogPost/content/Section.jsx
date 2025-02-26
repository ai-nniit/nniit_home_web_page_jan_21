function Section({ id, title, content }) {
    return (
      <section id={id} className="mb-8">
        <h2 className="text-2xl px-4 font-bold mb-4">{title}</h2>
        {content.map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </section>
    );
  }
  
  export default Section;