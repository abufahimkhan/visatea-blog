import React from 'react'
import Link from 'next/link'

const DependentVisaBlog = () => {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Belgium Dependent Visa for Family Members</h1>
            <p className="mb-4">
                {` If you're planning to join a family member in Belgium and your nationality is not within the EU or EEA, you will need a dependent visa. Family members from EU/EEA countries and Switzerland do not require a visa but must register with local administration after arriving. For more details on the application procedure, necessary documents, and FAQs, visit the full guide:`}
            </p>
            <Link href="https://visaguide.world/europe/belgium-visa/long-stay/dependent-visa/" passHref>
                <p className="text-blue-600 hover:underline">Belgium Dependent Visa for Family Members</p>
            </Link>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Australia Skilled Independent Visa (NZ Stream)</h2>
            <p className="mb-4">
                New Zealand citizens living in Australia for several years can apply for the Skilled Independent Visa (Subclass 189, NZ Stream), which provides a pathway to permanent residency. To understand the full application process and eligibility requirements, check the details below:
            </p>
            <Link href="https://visaguide.world/australia-visa/work/skilled-independent-visa-189/new-zealand-stream/" passHref>
                <p className="text-blue-600 hover:underline">Australia Skilled Independent Visa from New Zealand</p>
            </Link>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Australia Skilled Independent Visa</h2>
            <p className="mb-4">
                The Australia Skilled Independent Visa (Subclass 189) allows highly skilled professionals to live and work in Australia without employer sponsorship. Learn more about the eligibility criteria, points system, and the application process here:
            </p>
            <Link href="https://visaguide.world/australia-visa/work/skilled-independent-visa-189/" passHref>
                <p className="text-blue-600 hover:underline">Australia Skilled Independent Visa</p>
            </Link>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Australia Student Dependent Visa</h2>
            <p className="mb-4">
                International students studying in Australia can bring their family members as dependents. Whether applying together with your family or adding them later, here’s everything you need to know about the process:
            </p>
            <Link href="https://visaguide.world/australia-visa/study/dependent/" passHref>
                <p className="text-blue-600 hover:underline">Australia Student Dependent Visa</p>
            </Link>

            <h2 className="text-2xl font-semibold mt-8 mb-4">New Zealand Dependent Child of Student Visa Holder</h2>
            <p className="mb-4">
                Dependent children can accompany their parents to New Zealand if their parents hold a valid student visa. Read about the eligibility criteria and benefits of this visa below:
            </p>
            <Link href="https://visaguide.world/new-zealand-visa/family/dependent-child-student-visa/" passHref>
                <p className="text-blue-600 hover:underline">New Zealand Visa for Dependent Child of Student Visa Holder</p>
            </Link>

            <h2 className="text-2xl font-semibold mt-8 mb-4">New Zealand Dependent Child Resident Visa</h2>
            <p className="mb-4">
                If you are a resident or citizen of New Zealand, you can bring your dependent children to live with you. Learn more about the application process and benefits of the Dependent Child Resident Visa:
            </p>
            <Link href="https://visaguide.world/new-zealand-visa/family/child-visa/" passHref>
                <p className="text-blue-600 hover:underline">New Zealand Dependent Child Resident Visa</p>
            </Link>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Australia Dependent Child Visa (Subclass 445)</h2>
            <p className="mb-4">
                If you’ve applied for a permanent partner visa in Australia and have a dependent child, your child may apply for a Subclass 445 visa. This temporary visa allows the child to stay in Australia while your partner visa application is processed. Read more here:
            </p>
            <Link href="https://visaguide.world/australia-visa/family/dependent-child-visa-445/" passHref>
                <p className="text-blue-600 hover:underline">Australia Dependent Child Visa (Subclass 445)</p>
            </Link>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Australia Aged Dependent Relative Visa</h2>
            <p className="mb-4">
                The Aged Dependent Relative Visa allows elderly relatives of Australian citizens or permanent residents to live in Australia. The applicant must be financially dependent on their Australian family member. Learn more about the process here:
            </p>
            <Link href="https://visaguide.world/australia-visa/family/aged-dependent-relative-visas/" passHref>
                <p className="text-blue-600 hover:underline">Australia Aged Dependent Relative Visa</p>
            </Link>

            <h2 className="text-2xl font-semibold mt-8 mb-4">UK Dependent Visa for PBS Holders</h2>
            <p className="mb-4">
                The UK Dependent Visa allows certain family members of individuals holding a UK Points Based System (PBS) visa to join them in the UK. Find out who qualifies and how to apply:
            </p>
            <Link href="https://visaguide.world/europe/uk-visa/dependents/" passHref>
                <p className="text-blue-600 hover:underline">Visa for Dependents of UK Tier Visa Holders</p>
            </Link>

            <h2 className="text-2xl font-semibold mt-8 mb-4">US B1 Visa (Business)</h2>
            <p className="mb-4">
                The US B1 Visa is a non-immigrant visa for individuals entering the United States for business purposes, such as attending meetings or negotiating contracts. Find out more about the application process and eligibility requirements:
            </p>
            <Link href="https://visaguide.world/us-visa/nonimmigrant/visitor/b1-visa/" passHref>
                <p className="text-blue-600 hover:underline">US B1 Visa (Business)</p>
            </Link>
        </div>
    )
}

export default DependentVisaBlog
