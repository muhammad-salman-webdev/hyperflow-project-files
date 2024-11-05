import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Form from "../ContactUs/Form2";
import servicesData from "../../Components/data/Service/Services.json"; // Replace with the correct path

const Residential = () => {
  const [services, setServices] = useState([]);
  const [residentialServices, setResidentialServices] = useState([]);
  const [commercialServices, setCommercialServices] = useState([]);

  const [keyServices, setKeyServices] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Filter services based on category
    const residential = servicesData.filter(
      (service) => service.category === "Residential"
    );
    const commercial = servicesData.filter(
      (service) => service.category === "Commercial"
    );

    setResidentialServices(residential);
    setCommercialServices(commercial);

    const keyServices = 
  }, []);

  const handleClick = (id) => {
    navigate(`/service-detail/${id}`);
  };

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <section className="commerical">
        <div className="max-w-6xl mx-auto px-4 py-32">
          <p className="text-center space-x-6 uppercase text-sm text-white leading-none pb-4">
            <span>
              <Link to={"/"}>home</Link>
            </span>
            <span className="border-dashed border border-current"></span>
            <span>
              <a href="javascript:void(0)">Our Services</a>
            </span>
            <span className="border-dashed border border-current"></span>
            <span>
              <a href="javascript:void(0)">Residential Services</a>
            </span>
          </p>
          <div className="text-center text-white">
            <h1 className="lg:text-[64px] md:text-[45px] text-[36px] leading-tight font-bold uppercase">
              Our Residential Services
            </h1>
          </div>
          <div className="text-center mt-2">
            <Link
              to="/contact-us"
              href="javascript:void(0)"
              className="inline-block text-white text-[15px] py-2 leading-loose bg-[#EC4621] hover:bg-opacity-80 border border-[#EC4621] px-14 rounded-md md:my-1">
              Book Now
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-4">
          <div className=" justify-center bg-white lg:py-20 ">
            {service.keyservices.map((keyService) => (
              <div className="flex flex-wrap justify-center gap-6">
                <div className="md:w-2/5 w-full">
                  <img src={keyService.image} />
                </div>
                <div className="lg:w-[54%] w-full bg-white rounded-lg">
                  <div className="p-6">
                    <h3 className="font-bold uppercase leading-8 md:text-[30px] text-2xl text-[#121D50]">
                      {keyService.title}
                    </h3>
                    <p className="robot text-[#5C6C7B] text-base leading-7 py-3 ">
                      {keyService.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Residential;
