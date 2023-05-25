import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
      <div className="my-2">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
          veritatis pariatur, consequuntur reprehenderit necessitatibus quaerat
          fugiat quia, dolorum minus delectus debitis. Libero earum corrupti
          quos nobis! Nesciunt perferendis ex aliquam.
        </p>
      </div>
    </section>
  )
}

export default About;
