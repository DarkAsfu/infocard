import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Mail, MessageSquare, Pencil } from 'lucide-react';

const EnquiryForm = () => {
    return (
        <div className="max-w-md mx-auto mt-8">
            <div className="bg-white border border-border rounded-xl shadow-sm p-4">
                <h2 className="text-2xl font-bold mb-6 text-center">Enquiry Form</h2>
                <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="name" className="mb-1">Name</Label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                            <Input id="name" name="name" type="text" placeholder="Your name" required className="pl-10" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="email" className="mb-1">Email</Label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                            <Input id="email" name="email" type="email" placeholder="you@email.com" required className="pl-10" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="subject" className="mb-1">Subject</Label>
                        <div className="relative">
                            <Pencil className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                            <Input id="subject" name="subject" type="text" placeholder="Subject" required className="pl-10" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="message" className="mb-1">Message</Label>
                        <div className="relative">
                            <MessageSquare className="absolute left-3 top-3 size-4 text-muted-foreground" />
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Message"
                                required
                                rows={4}
                                className="pl-10 pr-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary min-h-[90px] w-full resize-none"
                            />
                        </div>
                    </div>
                    <Button type="submit" className="mt-2 w-full">Submit</Button>
                </form>
            </div>
        </div>
    );
};

export default EnquiryForm;