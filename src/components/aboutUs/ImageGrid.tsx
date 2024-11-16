import { images } from "@/utils/images";
import Image from "next/image";

const ImageGrid = () => {
    return (
        <div className="h-2/3 grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Large Item */}
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
                <Image
                    alt="USA"
                    src={images.usa}
                    className="w-full h-full object-cover"
                    layout="fill"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-2xl font-bold text-white">Explore the USA</h3>
                    </div>
                </div>
            </div>

            {/* Two Small Items */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <Image
                    alt="Australia"
                    src={images.australia}
                    className="w-full h-full object-cover"
                    layout="fill"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h4 className="text-xl font-bold text-white">Discover Australia</h4>
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <Image
                    alt="Canada"
                    src={images.canada}
                    className="w-full h-full object-cover"
                    layout="fill"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h4 className="text-xl font-bold text-white">Visit Canada</h4>
                    </div>
                </div>
            </div>

            {/* Three Medium Items */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <Image
                    alt="UK"
                    src={images.uk}
                    className="w-full h-full object-cover"
                    layout="fill"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h4 className="text-xl font-bold text-white">Explore the UK</h4>
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <Image
                    alt="Denmark"
                    src={images.denmark}
                    className="w-full h-full object-cover"
                    layout="fill"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h4 className="text-xl font-bold text-white">Discover Denmark</h4>
                    </div>
                </div>
            </div>

            {/* Additional Images */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <Image
                    alt="Sweden"
                    src={images.sweden}
                    className="w-full h-full object-cover"
                    layout="fill"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h4 className="text-xl font-bold text-white">Visit Sweden</h4>
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <Image
                    alt="Finland"
                    src={images.finland}
                    className="w-full h-full object-cover"
                    layout="fill"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h4 className="text-xl font-bold text-white">Explore Finland</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageGrid