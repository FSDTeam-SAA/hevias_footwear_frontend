"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Page = () => {
    return (
        <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans">
            <Card className="shadow-none container mx-auto  border-none bg-transparent rounded-xl">
                <CardHeader>
                    <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-800">
                        Terms & Conditions
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-10 text-gray-700">
                    {/* Introduction Section */}
                    <section className="space-y-4">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                            Introduction
                        </h2>
                        <p className="text-sm sm:text-base leading-relaxed">
                            This website (the &quot;Website&quot;) is operated by OptiSpider LLC, a Wyoming Limited liability (&quot;OptiSpider,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
                        </p>
                        <p className="text-sm sm:text-base leading-relaxed">
                            Please read these Terms & Conditions (&quot;Terms&quot;) carefully before using the Website. By accessing or using any part of the Website, you (&quot;you&quot; or &quot;User&quot;) agree to be bound by these Terms. If you do not agree to all of these Terms, you must immediately stop using the Website.
                        </p>
                        <p className="text-sm sm:text-base leading-relaxed">
                            OptiSpider may revise these Terms at any time by posting an updated version on the Website. Your continued use after any such change constitutes acceptance of the new Terms. You should therefore review these Terms regularly.
                        </p>
                    </section>

                    {/* Disclaimer Section */}
                    <section className="space-y-4">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                            Disclaimer
                        </h2>
                        <p className="text-sm sm:text-base leading-relaxed">
                            While OptiSpider strives to keep the Website available 24/7, we make no guarantee it will be uninterrupted or error-free. OptiSpider is not liable for any temporary suspension of access due to maintenance, technical issues, or other causes beyond our control.
                        </p>
                        <p className="text-sm sm:text-base leading-relaxed">
                            All content on the Website, including text, graphics, and third-party materials (the &quot;Materials&quot;), is provided for general information only. It does not constitute professional advice or a recommendation related to your specific situation. You should seek appropriate professional advice before making any business decisions.
                        </p>
                    </section>

                    {/* Use of Website Content Section */}
                    <section className="space-y-4">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                            Use of Website Content
                        </h2>
                        <h3 className="font-medium text-gray-700">Intellectual Property</h3>
                        <p className="text-sm sm:text-base leading-relaxed">
                            All Materials, including trademarks, service marks, trade names, logos, and copyrighted content, are the property of OptiSpider or our licensors.
                        </p>
                        <h3 className="font-medium text-gray-700">Permission</h3>
                        <p className="text-sm sm:text-base leading-relaxed">
                            You may view and print one copy of any page on the Website for your personal, non-commercial use only. You may not otherwise copy, reproduce, distribute, modify, or create derivative works of any Materials without our prior written consent.
                        </p>
                    </section>

                    {/* Prohibited Conduct Section */}
                    <section className="space-y-4">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                            Prohibited Conduct
                        </h2>
                        <p className="text-sm sm:text-base leading-relaxed">You agree not to:</p>
                        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base leading-relaxed ml-4">
                            <li>Scrape or copy any data or content from the Website;</li>
                            <li>Reverse-engineer, decompile, or otherwise attempt to extract source code or data;</li>
                            <li>Frame or mirror the Website or any part thereof on any other server or website;</li>
                            <li>Use the Website or Materials for any unlawful or unauthorized purpose;</li>
                            <li>
                                Post or transmit any material that is defamatory, obscene, threatening, infringing, or that otherwise violates any party&apos;s rights.
                            </li>
                        </ul>
                    </section>

                    {/* Use of Software Section */}
                    <section className="space-y-4">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                            Use of Software
                        </h2>
                        <p className="text-sm sm:text-base leading-relaxed">
                            Any software made available for download from the Website is licensed to you under the terms of the accompanying End User License Agreement (&quot;EULA&quot;). Do not install or use such software if you do not agree to its EULA.
                        </p>
                    </section>

                    {/* Contact Us Section */}
                    <section className="space-y-4">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                            Contact Us
                        </h2>
                        <p className="text-sm sm:text-base leading-relaxed">
                            If you have any questions regarding these Terms, please contact us at{" "}
                            <span className="font-medium text-blue-600">support@optispider.com</span>.
                        </p>
                    </section>
                </CardContent>
            </Card>
        </div>
    );
};

export default Page;
