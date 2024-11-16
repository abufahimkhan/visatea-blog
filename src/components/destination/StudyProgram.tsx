import { nanoid } from "nanoid";
import { HiOutlineClipboardList } from "react-icons/hi";

const StudyProgram = () => {
  const mastersPrograms = [
    {
      ielts: "IELTS 6.5 (6)/ Direct",
      universities: [
        "Western Sydney University",
        "Charles Sturt University",
        "CQ University",
        "University of Tasmania",
        "Curtin University",
        "Edith Cowan (Stage-1)",
      ],
    },
    {
      ielts: "IELTS 6 (6)/ Direct",
      universities: [
        "Victoria University",
        "University of New England",
        "Edith Cowan (Stage-2)",
        "Griffith University",
      ],
    },
    {
      ielts: "IELTS 6 (5.5)/ Direct",
      universities: [
        "Latrobe University",
        "Kaplan Business School",
        "University OF Canberra",
        "Western Sydney University Sydney City Campus",
      ],
    },
    {
      ielts: "Masters with Pre-Masters (6/6)",
      universities: [
        "University of Tasmania (*= accepts specific uni's of BD)",
        "Latrobe University",
        "Charles Darwin University",
      ],
    },
    {
      ielts: "Masters with Pre-Masters (6/5.5)",
      universities: [
        "The University of Notre Dame Australia",
        "Southern Cross University (*= accepts specific uni's of BD)",
      ],
    },
    { ielts: "Pre-Masters (5.5/5)", universities: [] },
    { ielts: "Masters with ELICOS", universities: [] },
  ];

  const bachelorsPrograms = [
    {
      ielts: "IELTS 6.5 (6)/ Direct",
      universities: [
        "Western Sydney University",
        "Southern Cross University",
        "Latrobe University",
      ],
    },
    {
      ielts: "IELTS 6 (5.5)/ Direct",
      universities: [
        "Western Sydney University",
        "Curtin University",
        "Edith Cowan",
        "Charles Sturt University",
      ],
    },
    {
      ielts: "IELTS 6 (6)/ Direct",
      universities: [
        "Victoria University",
        "Deakin University",
        "University of Adelaide",
      ],
    },
    {
      ielts: "IELTS 6 (5.5)/ Diploma",
      universities: [
        "University of Tasmania",
        "The University of Notre Dame Australia",
        "La Trobe - Melbourne",
        "University of South Australia",
      ],
    },
    {
      ielts: "IELTS 5.5 (5.5)/ Diploma",
      universities: [
        "Flinders University",
        "Swinburne University",
        "South Australian Institute of Business & Technology leading to University of South Australia",
      ],
    },
    {
      ielts: "IELTS 5.5 (5)/ Diploma",
      universities: [
        "Charles Darwin University",
        "University OF Canberra",
        "La Trobe - Sydney",
        "University of Tasmania",
      ],
    },
  ];

  return (
    <div className="p-5 max-w-full bg-white shadow-lg">
      {/* Header */}
      <section className="mb-8 text-center">
        <h2 className="text-2xl font-semibold text-black mb-4">
          <HiOutlineClipboardList className="inline-block text-blue-500 mr-2" />
          Study Programs & Eligibility
        </h2>
        <p className="text-gray-700">
          Discover universities and IELTS requirements for Master's and
          Bachelor's programs.
        </p>
      </section>

      {/* Master's Programs Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold text-black mb-4 text-center">
          Master’s Programs
        </h3>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border border-gray-300">
                  IELTS Requirement
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border border-gray-300">
                  Universities
                </th>
              </tr>
            </thead>
            <tbody>
              {mastersPrograms.map((program, index) => (
                <tr key={index} className="even:bg-gray-50">
                  <td className="px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700">
                    {program.ielts}
                  </td>
                  <td className="px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700">
                    {program.universities.length > 0
                      ? program.universities.join(", ")
                      : "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Bachelor's Programs Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold text-black mb-4 text-center">
          Bachelor’s Programs
        </h3>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border border-gray-300">
                  IELTS Requirement
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border border-gray-300">
                  Universities
                </th>
              </tr>
            </thead>
            <tbody>
              {bachelorsPrograms.map((program, index) => (
                <tr key={index} className="even:bg-gray-50">
                  <td className="px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700">
                    {program.ielts}
                  </td>
                  <td className="px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700">
                    {program.universities.length > 0
                      ? program.universities.join(", ")
                      : "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default StudyProgram;
