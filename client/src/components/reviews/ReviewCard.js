import React from 'react';

import { render } from 'react-dom';

class ReviewCard extends React.Component {
  render() {
    return (
      <div className="review-card" key={this.props.id}>
        <p>{this.props.email}</p>
        <p>{this.props.review}</p>
      </div>
    );
  }
}

export default ReviewCard;


{/* <section id="skills">
<h3>Things I Can Do</h3>
<ul class="grid">
  <li>
    <img src="assets/comet_1.svg" alt="comet">
    <h4>JavaScript</h4>
  </li>
  <li>
    <img src="assets/comet_2.svg" alt="comet">
    <h4>React</h4>
  </li>
  <li>
    <img src="assets/comet_3.svg" alt="comet">
    <h4>Firebase</h4>
  </li>
  <li>
    <img src="assets/comet_4.svg" alt="comet">
    <h4>Flutter</h4>
  </li>
</ul>
<p class="leading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla lacus diam. Mauris fringilla consectetur nibh, sit amet tempus augue.</p>
</section> */}