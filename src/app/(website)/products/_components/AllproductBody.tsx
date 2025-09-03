import ProductCard from '@/components/reusebale/ProductCard'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'



export const products = [
    {
        id: "1",
        name: "Classic Strip Shirt",
        images: [
            "https://images.unsplash.com/photo-1598099947145-e85739e7ca28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"
        ],
        price: 95,
        discount: 70,
        rating: 4.8,
        description: `Add versatility and comfort to your wardrobe with this basic strap blouse, an essential piece that combines effortless style with everyday practicality. Crafted from soft, lightweight materials like cotton, linen, or polyester, this blouse is perfect for warm climates and provides a breathable option for all seasons.
Designed with thin straps for a breezy, airy feel, the blouse features a flattering cut that drapes gracefully, ensuring comfort without compromising on style. Its round or V-neck offers a subtle yet chic touch, drawing attention to your neckline and shoulders while adding a delicate, feminine flair. Whether you’re pairing it with jeans for a relaxed look or with a skirt for a more polished, f`,
        moq: 6,
        stock_quantity: 10,
    },
    {
        id: "2",
        name: "Casual Blue Shirt",
        images: [
            "https://images.unsplash.com/photo-1585914924626-15adac1e6402?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxmYXNoaW9ufGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"
        ],
        price: 85,
        discount: 60,
        rating: 4.5,
        description: `Add versatility and comfort to your wardrobe with this basic strap blouse, an essential piece that combines effortless style with everyday practicality. Crafted from soft, lightweight materials like cotton, linen, or polyester, this blouse is perfect for warm climates and provides a breathable option for all seasons.
Designed with thin straps for a breezy, airy feel, the blouse features a flattering cut that drapes gracefully, ensuring comfort without compromising on style. Its round or V-neck offers a subtle yet chic touch, drawing attention to your neckline and shoulders while adding a delicate, feminine flair. Whether you’re pairing it with jeans for a relaxed look or with a skirt for a more polished, f`
        , moq: 5,
        stock_quantity: 15,
    },
    {
        id: "3",
        name: "Formal White Shirt",
        images: [
            "https://images.unsplash.com/photo-1558303522-d7a2bdfdbd82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxmYXNoaW9ufGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1467043237213-65f2da53396f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxmYXNoaW9ufGVufDB8fDB8fHww"
        ],
        price: 120,
        discount: 50,
        rating: 4.9,
        description: `Add versatility and comfort to your wardrobe with this basic strap blouse, an essential piece that combines effortless style with everyday practicality. Crafted from soft, lightweight materials like cotton, linen, or polyester, this blouse is perfect for warm climates and provides a breathable option for all seasons.
Designed with thin straps for a breezy, airy feel, the blouse features a flattering cut that drapes gracefully, ensuring comfort without compromising on style. Its round or V-neck offers a subtle yet chic touch, drawing attention to your neckline and shoulders while adding a delicate, feminine flair. Whether you’re pairing it with jeans for a relaxed look or with a skirt for a more polished, f`,
        moq: 3,
        stock_quantity: 8,
    },
    {
        id: "5",
        name: "Smart Watch",
        images: [
            "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxmYXNoaW9ufGVufDB8fDB8fHww",
            "https://plus.unsplash.com/premium_photo-1671198905435-20f8d166efb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxmYXNoaW9ufGVufDB8fDB8fHww"
        ],
        price: 250,
        discount: 30,
        rating: 4.7,
        description: `Add versatility and comfort to your wardrobe with this basic strap blouse, an essential piece that combines effortless style with everyday practicality. Crafted from soft, lightweight materials like cotton, linen, or polyester, this blouse is perfect for warm climates and provides a breathable option for all seasons.
Designed with thin straps for a breezy, airy feel, the blouse features a flattering cut that drapes gracefully, ensuring comfort without compromising on style. Its round or V-neck offers a subtle yet chic touch, drawing attention to your neckline and shoulders while adding a delicate, feminine flair. Whether you’re pairing it with jeans for a relaxed look or with a skirt for a more polished, f`,
        moq: 2,
        stock_quantity: 20,
    },
];

const AllproductBody = () => {



    return (
        <div className='container'>
            <div className='mt-24 flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-0 '>
                <div className='space-y-5'>
                    <p>15,000+ Results</p>
                    <h2 className='mt-2  font-semibold text-[#131313] text-4xl'>Best Sellers</h2>
                    <div className="flex gap-4">
                        <Select>
                            <SelectTrigger className="w-[140px] bg-[#F2F1F0]">
                                <SelectValue placeholder="Price" />
                            </SelectTrigger>
                            <SelectContent className="w-[140px]">
                                <SelectItem value="low">Low to High</SelectItem>
                                <SelectItem value="high">High to Low</SelectItem>
                                <SelectItem value="default">Default</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select>
                            <SelectTrigger className="w-[140px] bg-[#F2F1F0]">
                                <SelectValue placeholder="Category" />
                            </SelectTrigger>
                            <SelectContent className="w-[140px]">
                                <SelectItem value="mobile">Mobile</SelectItem>
                                <SelectItem value="computer">Computer</SelectItem>
                                <SelectItem value="ac">Ac</SelectItem>
                                <SelectItem value="camera">Camera</SelectItem>
                                <SelectItem value="tablet">Tablet</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select>
                            <SelectTrigger className="w-[140px] bg-[#F2F1F0]">
                                <SelectValue placeholder="Brand" />
                            </SelectTrigger>
                            <SelectContent className="w-[140px]">
                                <SelectItem value="puma">Puma</SelectItem>
                                <SelectItem value="netflix">Netflix</SelectItem>
                                <SelectItem value="walton">Walton</SelectItem>
                                <SelectItem value="bata">Bata</SelectItem>
                                <SelectItem value="apex">Apex</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>


                </div>
                <div className='flex gap-4 items-center justify-center'>
                    short by:  <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="best sellers" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="best sellers">Best sellers</SelectItem>
                            <SelectItem value="new arrivals">new arrivals</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div>
                {/* product card  */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 mb-20'>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllproductBody