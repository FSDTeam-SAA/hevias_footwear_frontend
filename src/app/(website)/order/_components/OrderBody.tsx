"use client"
import { Pagination } from '@/components/Pagination'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React, { useState } from 'react'

const orders = [
    {
        id: 1,
        productName: "T-shirt",
        price: "$130.00",
        date: "Feb 10, 2025",
        status: "Delivered",
    },
    {
        id: 2,
        productName: "Shoes",
        price: "$250.00",
        date: "Feb 12, 2025",
        status: "Pending",
    },
    {
        id: 3,
        productName: "Watch",
        price: "$560.00",
        date: "Feb 15, 2025",
        status: "Shipped",
    },
    {
        id: 4,
        productName: "Jacket",
        price: "$320.00",
        date: "Feb 18, 2025",
        status: "Cancelled",
    },
]

const statusColors: Record<string, string> = {
    Delivered: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Shipped: "bg-blue-100 text-blue-700",
    Cancelled: "bg-red-100 text-red-700",
}

const POSTS_PER_PAGE = 10

const OrderBody = () => {
    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = Math.ceil(orders.length / POSTS_PER_PAGE)
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE
    const endIndex = startIndex + POSTS_PER_PAGE
    const currentPosts = orders.slice(startIndex, endIndex)

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className="py-16">
            <h1 className="text-[#1C2228] text-[40px] font-bold text-center mb-10">
                Order History
            </h1>
            <div className="container mx-auto">
                <Table className="border border-gray-200 rounded-lg shadow-sm">
                    <TableHeader className="bg-gray-100">
                        <TableRow>
                            <TableHead className="w-[180px] text-center">Product Name</TableHead>
                            <TableHead className="text-center">Price</TableHead>
                            <TableHead className="text-center">Date</TableHead>
                            <TableHead className="text-center">Status</TableHead>
                            <TableHead className="text-center">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentPosts.map((order) => (
                            <TableRow key={order.id} className="hover:bg-gray-50 transition">
                                <TableCell className="font-medium text-center py-4">{order.productName}</TableCell>
                                <TableCell className="text-center">{order.price}</TableCell>
                                <TableCell className="text-center">{order.date}</TableCell>
                                <TableCell className="text-center">
                                    <span
                                        className={`px-3 py-1 text-xs font-semibold rounded-full ${statusColors[order.status]}`}
                                    >
                                        {order.status}
                                    </span>
                                </TableCell>
                                <TableCell className="text-center">
                                    <button className="px-4 py-1 text-sm font-medium rounded-lg  text-black border-b hover:opacity-90 transition">
                                        View Details
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    )
}

export default OrderBody
