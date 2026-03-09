function PageLayout({ title, children }) {
  return (
    <main className="container">
      <section className="card">
        <h1>{title}</h1>
        {children}
      </section>
    </main>
  );
}

export default PageLayout;