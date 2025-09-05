"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { PasswordInput } from "@/components/ui/password-input"
import { changePasswordSchema, ChangePasswordValues } from "@/schemas/changePasswordSchema"


const ChangePassword = () => {
    const form = useForm<ChangePasswordValues>({
        resolver: zodResolver(changePasswordSchema),
    })

    const onSubmit = (values: ChangePasswordValues) => {
        try {
            console.log(values)
            toast.success("Password updated successfully!")
        } catch (error) {
            console.error("Password change failed", error)
            toast.error("Failed to update password. Please try again.")
        }
    }

    return (
        <div>
            <h1 className="text-[#131313] text-[24px] font-semibold text-center mt-24">Change Password</h1>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6 container mx-auto py-10"
                >
                    {/* Current Password */}
                    <FormField
                        control={form.control}
                        name="currentPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Current Password</FormLabel>
                                <FormControl>
                                    <PasswordInput className="py-6" placeholder="Enter current password..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* New Password + Confirm Password */}
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-6">
                            <FormField
                                control={form.control}
                                name="newPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>New Password</FormLabel>
                                        <FormControl>
                                            <PasswordInput className="py-6" placeholder="Enter new password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="col-span-6">
                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Confirm New Password</FormLabel>
                                        <FormControl>
                                            <PasswordInput className="py-6" placeholder="Re-enter new password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    <Button type="submit">Save</Button>
                </form>
            </Form>
        </div>
    )
}

export default ChangePassword
