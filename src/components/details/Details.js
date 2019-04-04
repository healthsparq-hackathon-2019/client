import React from 'react';
import pic from '../../assets/docpic.jpg';

function Details() {
  return (
    <>
      <h2>Appointment Details</h2>
      <section>
        <h3>Providence Hospital</h3>
        <p>Suite 200</p>
        <p>9205 SW Barnes Rd, Portland, OR 97225</p>
      </section>
      <section>
        <figure>
          <img src={pic} alt="doctor pic"/>
        </figure>
        <h3>My Doctor</h3>
        <p> Melissa S. Yamauchi, M.D.</p>
      </section>
      <section>
        <p>April 5, 2019</p>
        <p>5pm</p>
        <p>Check-in: 4:45pm</p>
      </section>
    </>
  )
}
export default Details;
