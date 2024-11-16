import AboutButton from './AboutButton';
import AboutContent from './AboutContent';
import ImageGrid from './ImageGrid';

const AboutUs = () => {
    return (
        <section>
            <div className="max-w-screen-2xl px-1 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {/* Text Content */}
                    <div>
                        <AboutContent />
                        <AboutButton />
                    </div>

                    {/* Image Grid */}
                    <ImageGrid />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
