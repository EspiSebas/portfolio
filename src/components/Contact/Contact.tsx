export const Contact = () => {
  return (
    <section>
      <h2 className="text-center mb-4">Contacto</h2>

      <div className="row justify-content-center" style={{ maxWidth: 600, margin: "0 auto" }}>
        <div className="col-md-6 mb-3">
          <label htmlFor="name" className="form-label">Nombre:</label>
          <input type="text" className="form-control" id="email1" placeholder="nombre@correo.com" />
        </div>

        <div className="col-md-6 mb-3">
          <label htmlFor="name" className="form-label">Correo</label>
          <input type="email" className="form-control" id="email2" placeholder="nombre@correo.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Ingrese el asunto</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
        </div>
      </div>
    
    </section>
  );
};
