import Head from "next/head.js";
import Carousel from "../components/Carousel";
import { Button } from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import "../static/webkit.css"
import Table from "../components/Table"
export default function Xaviers() {
  return (
    <>
      <Head>
        <title>St. Xavier's College Autonomous</title>
        <style>
          {`
          /* Custom scrollbar for webkit-based browsers (e.g., Chrome, Safari) */
          ::-webkit-scrollbar {
            width: 8px;
            border-radius: 4px;
          }

          ::-webkit-scrollbar-thumb {
            background-color: rgba(200, 200, 200, 0.5);
            border-radius: 4px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background-color: rgba(180, 180, 180, 0.7);
          }

          ::-webkit-scrollbar-thumb:active {
            background-color: rgba(90, 90, 90, 0.9);
          }
          html,
body {
  background-color: #030303;
  min-height: 100vh;
}
        `}
        </style>
        <link
          rel="icon"
          type="image/png"
          sizes="196x196"
          href="https://xaviers.ac/____impro/1/onewebmedia/Crest-dark-background.png?etag=%228d5e-627c9002%22&sourceContentType=image%2Fpng&resize=196,196&ignoreAspectRatio"
        ></link>
        <meta
          name="twitter:image"
          content="https://xaviers.ac/____impro/1/onewebmedia/Crest.png?etag=%229b3e-627c9008%22&amp;sourceContentType=image%2Fpng"
        />
        <meta
          name="twitter:image:alt"
          content="St. Xavier's College Autonomous"
        />
        <meta name="twitter:title" content="St. Xavier's College Autonomous" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:image:height" content="936" />
        <meta property="og:image:width" content="744" />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:image"
          content="https://xaviers.ac/____impro/1/onewebmedia/Crest.png?etag=%229b3e-627c9008%22&amp;sourceContentType=image%2Fpng"
        />
        <meta property="og:url" content="https://xaviers.ac/" />
        <meta
          property="og:site_name"
          content="St. Xavier's College Autonomous"
        />
        <meta property="og:title" content="St. Xavier's College Autonomous" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="">
        <Header />
      </div>
      <main className="flex w-full min-h-screen overscroll-x-none overflow-hidden text-white relative">
        <div className="">
          {" "}
          <div className="hidden sm:flex">
            {" "}
            <Carousel />
          </div>
          <div className={"h-full p-4 "}>
            <h2 className="text-xl font-bold">Announcements</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <Button
                text1=" H.S.C. - July, Aug -23"
                text2=" Practicals and Orals Timetable"
              />
              <Button
                text1="Seating Arrangement & Instructions to Students for ODD Semester"
                text2="CIA Exam - July -23"
              />

              <Button
                text1="Accommodation Form for Students with Disabilities"
                text2="FY 23-24."
              />

              <Button
                text1="TIME TABLE FOR THE 1st C.I.A."
                text2=" EXAMINATION 2023-24 22nd July to
                28th July -23"
              />
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              <div className="col-span-1">
                <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
                  Admission Notices
                </h1>
                <p className="text-gray-600 mb-6">
                  Explore our latest admission policies, procedures, and
                  important notices for various courses.
                </p>
                <ul className="list-decimal list-outside space-y-2">
                  <li>
                    17-07-2023 Revised Admission Notice MA - Ancient Indian
                    Culture and Archaeology, Botany, Geology, Life Sciences
                  </li>
                  <li>
                    Application Form MA AIRCA (Ancient Indian History, Culture &
                    Archaeology)
                  </li>
                  <li>Application Form M.Sc. Botany</li>
                  <li>Programme Brochure M.Sc. Botany</li>
                  <li>Application Form M.Sc. Life Science</li>
                  <li>Programme Brochure M.Sc. Life Science</li>
                  <li>Application Form M.Sc. Microbiology</li>
                  <li>Programme Brochure M.Sc. Microbiology</li>
                  <li>Application Form M.Sc. Geology</li>
                  <li>Programme Brochure M.Sc. Geology</li>
                  <li>
                    National Education Policy 2020 - St. Xavier's College
                    (Autonomous) (From Academic Year 2023-2024)
                  </li>
                </ul>
              </div>
              <div className="col-span-1">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
                  Online Application Form
                </h2>
                <p className="text-gray-600 mb-6">
                  Apply for admission online today and begin your journey with
                  us!
                </p>
                <a
                  href="#"
                  className="inline-block px-8 py-3 text-white font-semibold bg-blue-600 rounded-md shadow-lg hover:bg-blue-700 transition duration-300"
                >
                  Apply Now
                </a>
              </div>
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-2 mt-2">
              <div className="relative group  rounded-2xl">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="bg-black relative rounded-2xl p-2">
                  {" "}
                  <h1 className="  text-3xl md:text-4xl font-bold text-white mb-4 rounded-full bg-gray-800 text-center flex justify-center items-center">
                    Admission Notices
                  </h1>
                  <p className="text-gray-500 mb-3  bg-black">
                    Explore our latest admission policies, procedures, and
                    important notices for various courses.
                  </p>
                  <ul className="list-inside list-decimal space-y-2  text-gray-400">
                    <li>
                      <a href="#">
                        17-07-2023 Revised Admission Notice MA - Ancient Indian
                        Culture and Archaeology, Botany, Geology, Life Sciences
                      </a>
                    </li>

                    <li>
                      <a href="#">Application Form M.Sc. Botany</a>
                    </li>
                    <li>
                      <a href="#">Programme Brochure M.Sc. Microbiology</a>
                    </li>
                    <li>
                      <a href="#">Application Form M.Sc. Geology</a>
                    </li>
                    <li>
                      <a href="#">Programme Brochure M.Sc. Geology</a>
                    </li>
                    <li>
                      <a href="#">
                        National Education Policy 2020 - St. Xavier's College
                        (Autonomous) (From Academic Year 2023-2024)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Online Application Form
                </h2>
                <p className="text-gray-400 mb-6">
                  Apply for admission online today and begin your journey with
                  us!
                </p>
                <div className="relative group inline-block">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <a className="relative px-5 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                    {" "}
                    Apply Now
                  </a>
                </div>
                {/* <a
                  href="#"
                  className="inline-block px-8 py-3 text-white font-semibold bg-blue-600 rounded-md shadow-lg hover:bg-blue-700 transition duration-300"
                >
                 
                </a> */}
              </div>
            </div>
            <div><Table /></div>
          </div>
        </div>
      </main>
      <div className="">
        <Footer />
      </div>
    </>
  );
}
