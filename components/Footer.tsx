import React from "react";
import { useState } from "react";

const Footer = () => {
  //   const [map, setMap] = useState(null);

  const contacts = {
    phone: "+91 22 2201 5599",
    email: "principal@sxc.ac.in",
    principalMeeting: "Mondays and Wednesdays, 10am to 11am",
    address: "St. Xavier's College, Mumbai, India",
  };

  return (
    <footer className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 p-4 gap-7">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30189.982960560417!2d72.83115!3d18.942551!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b870ba222b0b%3A0xa35fb09925b0951d!2sSt.%20Xavier&#39;s%20College%20(Autonomous)!5e0!3m2!1sen!2sin!4v1690021499693!5m2!1sen!2sin"
            width="400"
            height="300"
            className="border-none w-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="">
          <div>
            <h2 className="text-3xl font-bold text-gray-300">
              St. Xavier's College, Mumbai (Autonomous)
            </h2>
            <p className="text-sm text-gray-500 my-2">
              Founded in 1857, St. Xavier's College is one of the oldest and
              most prestigious colleges in India.
            </p>
          </div>
          <div>
            <ul className="list-item space-y-2">
              <li>
                <a href="tel:+912222015599" className="text-gray-200 flex">
                  <svg viewBox="0 0 29 29" className="w-6 h-6">
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.7"
                      d="M6.364 3.81c1.496-1.503 5.032-2.139 6.907-2.108 1.88-.218 1.273 8.104.313 8.263 0 0-3.039.384-3.125 1.275-.116 1.217 3.009 8.67 4.22 8.84.65.091 2.606-1.402 2.606-1.402 1.521-1.145 4.678 2.2 6.161 3.596.649.627.617 1.159-.059 1.947-1.181 1.322-4.29 3.439-5.52 3.266-2.988-.42-8.05-4.592-10.483-9.582-2.743-5.629-2.712-12.82-1.02-14.095z"
                    ></path>
                  </svg>{" "}
                  {contacts.phone}
                </a>
              </li>
              <li>
                <a
                  href="mailto:principal@sxc.ac.in"
                  className="text-gray-200 flex space-x-1"
                >
                  <svg viewBox="0 0 29 29" className="w-6 h-6">
                    <path
                      fill="currentColor"
                      d="M5.135 5.37c-1.531 0-2.772 1.209-2.772 2.7v12.958c0 1.491 1.241 2.7 2.772 2.7h18.848c1.53 0 2.771-1.209 2.771-2.7V8.07c0-1.491-1.24-2.7-2.771-2.7H5.135zm0-1.62h18.848c2.449 0 4.434 1.934 4.434 4.32v12.958c0 2.386-1.985 4.32-4.434 4.32H5.135c-2.45 0-4.435-1.934-4.435-4.32V8.07c0-2.386 1.986-4.32 4.435-4.32z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M23.998 7.48c.335.306.35.819.036 1.145l-5.898 6.103 5.88 5.728c.298.29.323.745.075 1.062l-.075.083a.847.847 0 01-1.176 0l-5.844-5.693-1.832 1.896a.847.847 0 01-1.21 0l-1.833-1.896L6.277 21.6a.847.847 0 01-1.176 0 .795.795 0 010-1.145l5.88-5.728-5.897-6.103a.795.795 0 01.035-1.145.847.847 0 011.176.035l8.264 8.552 8.264-8.552a.847.847 0 011.175-.035z"
                    ></path>
                  </svg>{" "}
                  <span>{contacts.email}</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:principal@sxc.ac.in"
                  className="text-gray-200 flex space-x-1"
                >
                  <svg viewBox="0 0 29 29" className="w-6 h-6">
                    <g
                      fill="none"
                      fill-rule="evenodd"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.7"
                    >
                      <path d="M18.625 10.2a4 4 0 11-8 .001 4 4 0 018-.001z"></path>
                      <path d="M23.825 10.2c0-5.985-4.92-9-9.5-8.95C9.797 1.2 5.3 4.223 5.3 10.2c0 5.979 8.188 16.677 8.426 17.116.238.438.976.438 1.214 0 5.923-7.41 8.885-13.116 8.885-17.116z"></path>
                    </g>
                  </svg>{" "}
                  <span>5, Mahapalika Marg, Mumbai- 400001, Maharashtra</span>
                </a>
              </li>
              <li>
                <p className="text-gray-100 space-x-1"><strong>Principal Meeting Timings:</strong> <span>{contacts.principalMeeting}</span></p>
              </li>
            </ul>
          </div>
        </div>

        {/* GOOGLE MAP INSTNCE  */}
      </div>
      <div className="my-4">
        <p className="text-sm text-center text-gray-300">
          Copyright © St. Xavier's College, Mumbai.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
