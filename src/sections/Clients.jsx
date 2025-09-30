import { clientReviews } from '../constants';

const Clients = () => {
  return (
    <section className="c-space">
      <div className="client-container">
        {clientReviews.map(({ id, name, position, img, review }) => (
          <div className="client-review" key={id}>
            <div className="text-white">{review}</div>
            <div className="flex gap-5">
              <img src={img} alt="img" />
              <div className="flex flex-col">
                <p className="text-white font-semibold">{name}</p>
                <p className="text-white font-light">{position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
