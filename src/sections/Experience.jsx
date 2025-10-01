import { workExperiences } from '../constants';

const Experience = () => {
  return (
    <section className="my-20 c-space">
      <div className="work-content">
        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
          {workExperiences.map(({ id, name, icon, pos, duration, title }) => (
            <div key={id} className="work-content">
              <div className="text-white-600 w-full">
                <div className="work-content_container ">
                  <div className="work-content_logo">
                    <img src={icon} alt="logo" className="w-full h-full" />
                  </div>
                  <div className="sm:py-5 p-2.5 sm:px-2.5 1.5">
                    <p className="text-white-700 font-bold">{name}</p>
                    <p className="text-white-500 font-sm">
                      {pos} -- {duration}
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">{title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
