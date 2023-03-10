import Hero from "../components/Hero";
let products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const Home = () => {
    return (
        <div>

            <main>
                <Hero />

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-2">
                            <h5>Esto puede ser algun menu o anuncio</h5>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>10 users included</li>
                                <li>2 GB of storage</li>
                                <li>Email support</li>
                                <li>Help center access</li>
                            </ul>
                        </div>
                        <div className="col-md-10">
                            <div className="row">
                                {products.map((product) => {
                                    return (
                                        <div className="col-sm-6 col-md-4" key={product}>
                                            <div className="card mb-4">
                                                <img src="https://picsum.photos/200/150" className="card-img-top" alt='test' />

                                                <div className="card-body">
                                                    <h4 className='card-title'>$350.00</h4>
                                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                    <a href="#" className="btn btn-primary btn-sm d-grid">Carrito</a>
                                                    <a href="#" className="btn btn-warning btn-sm d-grid mt-2">Detalle</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    </div>

                </div>



            </main>

        </div>
    );
}

export default Home;