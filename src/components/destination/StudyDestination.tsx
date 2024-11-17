import { nanoid } from "nanoid";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineClipboardList } from "react-icons/hi";
import { images } from "../../utils/images";
import StudyProgram from "./StudyProgram";

const countryFlags = [
  { name: "USA", flag: images.usaFlag },
  { name: "Canada", flag: images.canadaFlag },
  { name: "Australia", flag: images.australiaFlag },
  { name: "Finland", flag: images.finlandFlag },
  { name: "Sweden", flag: images.swedenFlag },
  { name: "UK", flag: images.ukFlag },
];

const checklistItems = [
  {
    id: nanoid(),
    name: "Appointment Confirmation",
    icon: HiOutlineClipboardList,
  },
  {
    id: nanoid(),
    name: "Photo (2” x 2” white background) 4 Copies",
    icon: HiOutlineClipboardList,
  },
  { id: nanoid(), name: "Passport (Original)", icon: HiOutlineClipboardList },
  { id: nanoid(), name: "DS-160 Confirmation", icon: HiOutlineClipboardList },
  { id: nanoid(), name: "I-20 Letter (Signed)", icon: HiOutlineClipboardList },
  {
    id: nanoid(),
    name: "SEVIS Fee Confirmation",
    icon: HiOutlineClipboardList,
  },
  {
    id: nanoid(),
    name: "All Academic Certificates & Transcripts",
    icon: HiOutlineClipboardList,
  },
  { id: nanoid(), name: "IELTS Certificate/MOI", icon: HiOutlineClipboardList },
  {
    id: nanoid(),
    name: "CV (If education gap is more than 2 Years)",
    icon: HiOutlineClipboardList,
  },
  {
    id: nanoid(),
    name: "Sponsor Bank Statement & Solvency (Last 6 months)",
    icon: HiOutlineClipboardList,
  },
  {
    id: nanoid(),
    name: "NID with Translated Copy/Passport of Sponsor",
    icon: HiOutlineClipboardList,
  },
  {
    id: nanoid(),
    name: "Sponsor Business Documents (Trade License, VAT)",
    icon: HiOutlineClipboardList,
  },
  {
    id: nanoid(),
    name: "Sponsor Job Documents (Job Letter, Salary Details)",
    icon: HiOutlineClipboardList,
  },
];

const StudyDestination = () => {
  return (
    <div className="p-5 max-w-full bg-white shadow-lg">
      {/* Header Section */}
      <div className="relative min-w-full h-36 md:h-[450px] overflow-hidden">
        <Image
          src="/destination/destiny.png"
          alt="Banner Image"
          layout="fill"
          objectFit="contain"
          className="absolute w-full h-full inset-0"
        />
      </div>

      {/* Title and Call-to-Action */}
      <section className="mb-8 mt-8 text-center">
        <h2 className="text-2xl font-semibold text-black mb-4">
          Secure Your Future with Our Student Visa Services
        </h2>
        <p className="text-gray-800 mb-4">
          MOI accepted, no service fee required!
        </p>
        <div className="flex justify-center items-center mb-4">
          <FaPhoneAlt className="text-blue-500 mr-2" />
          <span className="font-semibold text-black">
            CALL NOW: <span className="text-blue-600">01798-148695</span>
          </span>
        </div>
      </section>

      {/* Country Flags Section */}
      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-semibold text-black mb-4">
          Available Visa Services by Country:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {countryFlags.map(({ name, flag }) => (
            <div
              key={nanoid()}
              className="bg-gray-200 rounded-lg p-6 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg duration-300 flex items-center"
            >
              <Image
                src={flag}
                alt={`${name} Flag`}
                width={50}
                height={35}
                className="mr-3"
              />
              <h3 className="text-xl font-semibold text-black">{name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* F1 Student Visa Checklist Section */}
      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-semibold text-black mb-6 text-center">
          <HiOutlineClipboardList className="inline-block text-blue-500 mr-2" />
          F1 Student Visa Checklist (Bangladesh - US)
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border border-gray-300"></th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border border-gray-300">
                  Documents Required
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border border-gray-300">
                  Formatting
                </th>
              </tr>
            </thead>
            <tbody>
              {checklistItems.map((item, index) => (
                <tr key={item.id} className="even:bg-gray-50">
                  <td className="px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700">
                    {item.name}
                  </td>
                  <td className="px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700">
                    <item.icon className="text-blue-500 text-lg" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <StudyProgram />
    </div>
  );
};

export default StudyDestination;
