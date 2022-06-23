import '../index.css';

function Footer(){
    return(
        <div className="container-fluid text-center background-footer">
            <div className="row">
                <div className="col-md-3 col-12">
                        <h4 className="mt-4">Lo Básico</h4>
                        <ul>
                            <li>Sobre TMDB</li>
                            <li>Contacto</li>
                            <li>Foros de ayuda</li>
                            <li className="mb-4">API</li>
                        </ul>
                </div>
                <div className="col-md-3 col-12">
                        <h4 className="mt-4">Participa</h4>
                        <ul>
                            <li>Guia de aportes</li>
                            <li>Añadir nueva pelicula</li>
                            <li>Añadir nuevo programa</li>
                            <li className="mb-4">Twitter</li>
                        </ul>
                </div>
                <div className="col-md-3 col-12">
                        <h4 className="mt-4">Comunidad</h4>
                        <ul>
                            <li>Directrices</li>
                            <li>Discusiones</li>
                            <li>Youtube</li>
                            <li className="mb-4">Instagram</li>
                        </ul>
                </div>
                <div className="col-md-3 col-12">
                        <h4 className="mt-4">Legales</h4>
                        <ul>
                            <li>Términos de uso</li>
                            <li>Términos de uso de la API</li>
                            <li>Política de privacidad</li>
                            <li className="mb-4">Condiciones</li>
                        </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;