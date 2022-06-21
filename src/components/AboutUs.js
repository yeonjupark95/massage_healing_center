import React from "react";
import "../style/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-header">Meet Helen</div>
      <div className="about-subheader">LMT/Aesthetician</div>
      <div className="about-content">
        Helen has been a Licensed Massage Therapist for over 10 years and is also a licensed aesthetician. <br />
        As Helen lived in Korea for the majority of her life, she is well aware of the popular technologies used among the aestheticians in Korea.
        <br />
        If you have any questions regarding her service, please text her at 214-668-7839.
      </div>
      <div className="about-header">Meet Yeonju</div>
      <div className="about-subheader">Software Engineer</div>
      <div className="about-content">
        Yeonju is an Aggie chemical engineer (class of 2019) and also graduated from a full stack web development bootcamp. She decided to build this website for her mom, Helen. <br />
        If you have experienced any technical issues from this website, please contact her at yeonjupark95@gmail.com
      </div>
    </div>
  );
};
export default AboutUs;
