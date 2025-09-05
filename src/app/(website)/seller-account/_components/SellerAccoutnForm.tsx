"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  emailAddress: z.string().email({
    message: "Please enter a valid email address.",
  }),
  companyName: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  taxId: z.string().min(1, {
    message: "Tax ID is required.",
  }),
  comments: z.string().optional(),
});

export function SellerAccoutnForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: "",
      companyName: "",
      taxId: "",
      comments: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="min-h-[80vh] bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Manufacture in LATAM
          </h1>
          <p className="text-sm text-gray-600 mb-8">
            We are excited to work with you. Sign up below and we will start adding with you, Selling to the 
            FastLane Marketplace.
          </p>
          <h2 className="text-xl font-semibold text-gray-900">
            Vendor Sign Up
          </h2>
        </div>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="emailAddress"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email Address"
                      {...field}
                      className="w-full px-3 h-[45px] border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Company Name"
                      {...field}
                      className="w-full px-3 h-[45px] border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="taxId"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="TAX ID"
                      {...field}
                      className="w-full px-3 h-[45px] border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="comments"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Comments"
                      {...field}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[80px] resize-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full h-[50px] bg-[#797068] hover:bg-[#917761] text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 mt-6"
            >
              Submit
            </Button>
          </form>
        </Form>

        {/* Footer text */}
        <p className="text-xs text-gray-500 text-center mt-4">
          By signing up, you agree to receive communications from FastLane. View our privacy 
          policy and terms of service for more info.
        </p>
      </div>
    </div>
  );
}