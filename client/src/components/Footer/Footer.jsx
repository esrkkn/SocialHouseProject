import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-google'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-github'></i>
          </a>
        </div>
      </section>

      <section className=''>
        <div className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom col-xl-11 '>
          <div className='row'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>Social House Project
              </h6>
              <p>
                Our company was founded on the housing crisis facing everyone in Germany. 
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Home</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Blog
                </a>
              </p>
             
              <p>
                <a href='#!' className='text-reset'>
                  About
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                FAQ
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
               Contact
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='https://service.berlin.de/dienstleistung/120686/' className='text-reset'>
                Address Registration (Anmeldung) 
                </a>
              </p>
              <p>
                <a href='https://www.umzugspreisvergleich.de/' className='text-reset'>
                  Compare Moving Companies
                </a>
              </p>
              <p>
                <a href='https://www.meineschufa.de/de/' className='text-reset'>
                  SCHUFA-Credit Report
                </a>
              </p>
              <p>
                <a href='https://www.ebay-kleinanzeigen.de/stadt/berlin/' className='text-reset'>
                Secondhand furniture (Ebay)
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-4 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> Kreuzberg, 10965 Berlin, Germany.
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                info@socialhouseproject.de
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> +49 30 901820
              </p>
              <p>
                <i className='fas fa-print me-3'></i> +49 1522 3433333
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='/'>
         Social House Project
        </a>
      </div>
    </MDBFooter>
  );
}