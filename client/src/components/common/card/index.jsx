import "./card.css";

const Card = ({ title, description, image }) => {
  return (
    <div className="card-container">
      <div>
        {/* <h4>header</h4> */}
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius,
          laboriosam! At, nostrum suscipit! Quia ex mollitia ut voluptas tenetur
          debitis! Quas, veniam praesentium. Fuga porro, dolor adipisci deserunt
          vitae ex? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Suscipit dolor cum adipisci impedit aliquid laboriosam voluptas
          dolorem possimus, amet, eveniet officiis aspernatur dicta earum eaque
          ut nam ullam ratione repudiandae?
        </p>
      </div>
      <div className="card-image">
        <img src="https://via.placeholder.com/400" alt="placeholder" />
      </div>
    </div>
  );
};

export default Card;
