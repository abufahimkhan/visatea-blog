import Link from 'next/link';

const AboutButton = () => {
    return (
        <div className="mt-8">
            <Link
                href="#"
                className="inline-block rounded border border-blue-500 bg-blue-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-500 focus:outline-none focus:ring focus:ring-yellow-400"
            >
                Get Started Today
            </Link>
        </div>
    );
};

export default AboutButton;
