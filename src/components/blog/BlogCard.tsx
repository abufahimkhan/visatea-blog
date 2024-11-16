"use client";
import Image from 'next/image';
import Link from 'next/link';
import { VisaBlog } from '@/mock/VisaBlog';
import { nanoid } from 'nanoid';
import { useState } from 'react';

const BlogCard = () => {
    const [showAll, setShowAll] = useState(false);

    // Toggle function to show/hide cards
    const toggleShowAll = () => {
        setShowAll((prev) => !prev);
    };

    // Determine which cards to display
    const displayedBlogs = showAll ? VisaBlog : VisaBlog.slice(0, 3);

    return (
        <section className="px-4 py-8 bg-gray-50">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold uppercase text-gray-900">
                    Latest Blog Posts
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                    Stay updated with our latest visa tips and insights
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {displayedBlogs.map((blog) => (
                    <article key={nanoid()} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition hover:shadow-lg hover:-translate-y-1 transform duration-300">
                        <div className="text-slate-400 px-3 py-1 text-[8px] font-bold uppercase">
                            {blog.tagline}
                        </div>
                        <div className="relative w-full h-36 sm:h-40 lg:h-48">
                            <Image
                                src={blog.imageUrl}
                                alt={blog.title}
                                fill
                                style={{ objectFit: 'cover' }}
                                className="w-full h-full transition hover:opacity-90"
                            />
                        </div>
                        <div className="p-4 flex flex-col justify-between flex-1">
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1 text-sm">
                                    {blog.title}
                                </h3>
                                <p className="text-xs text-gray-700 line-clamp-3">
                                    {blog.content}
                                </p>
                            </div>

                            <div className="mt-2 flex justify-end">
                                <Link href={blog.route} passHref>
                                    <button className="bg-yellow-400 text-black px-3 py-1 text-xs font-bold uppercase transition hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-500">
                                        {blog.buttonText}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* More Button */}
            <div className="mt-6 text-center">
                <button
                    onClick={toggleShowAll}
                    className="bg-yellow-400 text-black px-4 py-2 text-sm font-bold uppercase transition hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-500"
                >
                    {showAll ? "Show Less" : "Show More"}
                </button>
            </div>
        </section>
    );
};

export default BlogCard;
