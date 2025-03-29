export default function Home() {
  return (
    <>
      <head>
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'
          rel='stylesheet'
        />
        <script
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js'
          defer
        ></script>
      </head>
      <div>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <div className='container'>
            <a className='navbar-brand' href='#'>
              LuxuryCars
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav ms-auto'>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Models
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Services
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/login'>
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main>
          <div className='container-fluid p-0'>
            <div className='position-relative'>
              <img
                src='/car-hero.png'
                alt='Luxury Car'
                className='w-auto h-screen'
                priority
              />
              <div
                className='position-absolute top-50 start-50 translate-middle text-center text-white'
                style={{
                  background: 'rgba(0, 0, 0, 0.5)',
                  padding: '2rem'
                }}
              >
                <h1 className='display-1'>Experience Luxury</h1>
                <p className='lead'>Discover our latest models</p>
                <button className='btn btn-light btn-lg'>Explore Now</button>
              </div>
            </div>

            <div className='container my-5'>
              <div className='row g-4'>
                <div className='col-md-4'>
                  <div className='card'>
                    <div className='card-body text-center'>
                      <h3>Latest Models</h3>
                      <p>Explore our newest vehicles</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='card'>
                    <div className='card-body text-center'>
                      <h3>Test Drive</h3>
                      <p>Schedule your test drive today</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='card'>
                    <div className='card-body text-center'>
                      <h3>Service</h3>
                      <p>Premium maintenance services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className='bg-dark text-white py-4'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4'>
                <h5>Contact</h5>
                <p>
                  Email: info@luxurycars.com
                  <br />
                  Phone: (555) 123-4567
                </p>
              </div>
              <div className='col-md-4'>
                <h5>Follow Us</h5>
                <div className='d-flex gap-3'>
                  <a href='#' className='text-white'>
                    Instagram
                  </a>
                  <a href='#' className='text-white'>
                    Facebook
                  </a>
                  <a href='#' className='text-white'>
                    Twitter
                  </a>
                </div>
              </div>
              <div className='col-md-4'>
                <h5>Location</h5>
                <p>
                  123 Luxury Avenue
                  <br />
                  Beverly Hills, CA 90210
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
