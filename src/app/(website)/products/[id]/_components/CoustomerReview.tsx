// components/ProductReviews.tsx
"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";
import RatingStars from "@/components/RatingStars";

interface Review {
    id: number;
    name: string;
    rating: number;
    comment: string;
}

const reviewsData: Review[] = [
    {
        id: 1,
        name: "Annette Black",
        rating: 5,
        comment:
            "Add versatility and comfort to your wardrobe with this basic strap blouse, an essential piece that combines effortless style with everyday practicality. Crafted from soft, lightweight materials like cotton, linen, or polyester, this blouse is perfect for warm climates and provides a breathable option for all seasons.",
    },
    {
        id: 2,
        name: "Annette Black",
        rating: 5,
        comment:
            "Add versatility and comfort to your wardrobe with this basic strap blouse, an essential piece that combines effortless style with everyday practicality. Crafted from soft, lightweight materials like cotton, linen, or polyester, this blouse is perfect for warm climates and provides a breathable option for all seasons.",
    },
    {
        id: 3,
        name: "Annette Black",
        rating: 5,
        comment:
            "Add versatility and comfort to your wardrobe with this basic strap blouse, an essential piece that combines effortless style with everyday practicality. Crafted from soft, lightweight materials like cotton, linen, or polyester, this blouse is perfect for warm climates and provides a breathable option for all seasons.",
    },
    {
        id: 4,
        name: "Annette Black",
        rating: 5,
        comment:
            "Add versatility and comfort to your wardrobe with this basic strap blouse, an essential piece that combines effortless style with everyday practicality. Crafted from soft, lightweight materials like cotton, linen, or polyester, this blouse is perfect for warm climates and provides a breathable option for all seasons.",
    },
    {
        id: 5,
        name: "Annette Black",
        rating: 4.3,
        comment:
            "Add versatility and comfort to your wardrobe with this basic strap blouse, an essential piece that combines effortless style with everyday practicality. Crafted from soft, lightweight materials like cotton, linen, or polyester, this blouse is perfect for warm climates and provides a breathable option for all seasons.",
    },
    {
        id: 6,
        name: "Annette Black",
        rating: 5,
        comment:
            "Add versatility and comfort to your wardrobe with this basic strap blouse, an essential piece that combines effortless style with everyday practicality. Crafted from soft, lightweight materials like cotton, linen, or polyester, this blouse is perfect for warm climates and provides a breathable option for all seasons.",
    },
    {
        id: 7,
        name: "Annette Black",
        rating: 5,
        comment:
            "Add versatility and comfort to your wardrobe with this basic strap blouse, an essential piece that combines effortless style with everyday practicality. Crafted from soft, lightweight materials like cotton, linen, or polyester, this blouse is perfect for warm climates and provides a breathable option for all seasons.",
    },
    {
        id: 8,
        name: "Annette Black",
        rating: 5,
        comment:
            "Add versatility and comfort to your wardrobe with this basic strap blouse, an essential piece that combines effortless style with everyday practicality. Crafted from soft, lightweight materials like cotton, linen, or polyester, this blouse is perfect for warm climates and provides a breathable option for all seasons.",
    },
];

const CoustomerReview = () => {
    const [newRating, setNewRating] = useState<number>(0);
    const [newComment, setNewComment] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle submit logic (API call or state update)
        console.log("Submitted Review:", { newRating, newComment });
        setNewRating(0);
        setNewComment("");
    };

    return (
        <section className="container mx-auto px-4 py-8">
            <div className="grid lg:grid-cols-2 gap-8">
                {/* Reviews List */}
                <div>
                    <h2 className="text-lg font-semibold mb-4 border-b ">
                        Customer Reviews ({reviewsData.length})
                    </h2>
                    <div className="space-y-[66px] scroll-hide mb-8 max-h-[540px] overflow-y-auto ">
                        {reviewsData.map((review) => (
                            <div key={review.id} className="border-b flex flex-col gap-3">
                                <p className="font-medium">{review.name}</p>
                                <div className="flex items-center gap-2 mb-2">
                                    <RatingStars rating={review.rating} />
                                </div>
                                <p className="text-gray-600 text-sm">{review.comment}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Review Form */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">
                        Be the first to review “Lustre Pendente Aramado Polaris”
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                How happy are you with our service
                            </label>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        size={20}
                                        className={`cursor-pointer ${star <= newRating ? "text-yellow-400" : "text-gray-300"
                                            }`}
                                        onClick={() => setNewRating(star)}
                                    />
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Descriptions</label>
                            <textarea
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="This bundle is amazing..."
                                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                rows={4}
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
                        >
                            Send Review
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default CoustomerReview