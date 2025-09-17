"use client"
import EnquiryForm from '@/app/components/EnquiryForm/EnquiryForm'
import Gallery from '@/app/components/Gallery/Gallery'
import QR from '@/app/components/QR/QR'
import RunningProject from '@/app/components/RunningProject/RunningProject'
import HeroVideoDialog from '@/components/magicui/hero-video-dialog'
import { Button } from '@/components/ui/button'
import {
  Building,
  ChevronRight,
  Download,
  ExternalLink,
  Facebook,
  Globe,
  Instagram,
  LinkedinIcon,
  Mail,
  MapIcon,
  MapPin,
  Phone,
  Twitter,
  Youtube
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

const user = {
    name: "Sohanoor Rahman",
    email: "sohun.me@gmail.com",
    url: "https://sohan-me.vercel.app",
    org: "Noob Tech",
    title: "Founder",
    note: "Digital Business Card - Created with NFC Tools"
};

const page = () => {
        useEffect(() => {
            if (typeof window === 'undefined') return;
            if (navigator.onLine) {
                window.location.href = 'http://localhost:3000/real-estate';
                return;
            }
            if (!window.__vcfDownloaded) {
                window.__vcfDownloaded = true;
                const vCard = `BEGIN:VCARD\nVERSION:3.0\nFN:${user.name}\nEMAIL:${user.email}\nURL:${user.url}\nORG:${user.org}\nTITLE:${user.title}\nNOTE:${user.note}\nEND:VCARD`;
                const blob = new Blob([vCard], { type: 'text/vcard' });
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = user.name.replace(/\s+/g, '_') + '.vcf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }, []);
    return (
        <div className='bg-[#c1dc18]'>
            <div className='max-w-md mx-auto'>
        <div className=''>
            <Image
                src='/real-estate/cover.jpg'
                width={1000}
                height={1000}
                alt='cover-image'
                className='w-full h-60 object-cover'
                priority
            />
            <div className='bg-[#1F1F21] p-2'>
                <div className='grid grid-cols-2 gap-4 pl-4 pr-1 pt-1 pb-1 bg-white rounded-md -mt-20  relative'>
                    <div className='mt-4'>
                        <h1 className='text-2xl font-extrabold md:text-4xl'>
                            Md. Ashraful Islam
                        </h1>
                        <p className='text-[14px] text-black/70 font-medium mt-3'>
                            Senior Sales Executive
                        </p>
                        <p className='text-[16px] text-black/70 font-bold mt-3'>
                            Royce Developer LTD
                        </p>
                    </div>
                    <div>
                        <Image
                            src='/real-estate/profile.jpg'
                            width={1000}
                            height={1000}
                            alt='avatar'
                            className='w-full h-full  object-cover rounded-md'
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = '/real-estate/default-profile.jpg';
                            }}
                            priority
                        />
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4 mt-4 mb-4 justify-center pb-4'>
                    <Button className='bg-[#c1dc18] text-black w-full font-bold h-14 hover:bg-white'>
                        <ExternalLink /> Exchange Contact
                    </Button>
                    <Button
                        className='bg-white text-black w-full font-bold h-14 hover:bg-[#c1dc18]'
                        onClick={() => {
                            const vCard = `BEGIN:VCARD\nVERSION:3.0\nFN:Md. Ashraful Islam\nORG:Royce Developer LTD\nTITLE:Senior Sales Executive\nTEL;TYPE=WORK,VOICE:+8801234567890\nTEL;TYPE=CELL,VOICE:+8801234567890\nEMAIL:ashrafulislamdev01@gmail.com\nADR;TYPE=WORK:;;Road 01, Nikunja-2, Khilkhet, Dhaka;;;;\nURL:https://ashrafulislam.vercel.app\nPHOTO;VALUE=URI:https://nfcwrap.vercel.app/real-estate/profile.jpg\nEND:VCARD`;
                            const blob = new Blob([vCard], { type: 'text/vcard' });
                            const link = document.createElement('a');
                            link.href = URL.createObjectURL(blob);
                            link.download = 'Md_Ashraful_Islam.vcf';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }}
                    >
                        <Download /> Save Contact
                    </Button>
                </div>
            </div>
        </div>
        <div className='bg-[#1F1F21] rounded-b-3xl'>
            <div className='bg-white rounded-3xl -mt-6 p-4'>
                <div>
                    <h3 className='text-2xl font-bold'>Social</h3>
                    <div className='flex items-center justify-between gap-4 mt-3'>
                        <Link className='bg-[#c1dc18] p-2 rounded-md' href='#'>
                            <Facebook />
                        </Link>
                        <Link className='bg-[#c1dc18] p-2 rounded-md' href='#'>
                            <Youtube />
                        </Link>
                        <Link className='bg-[#c1dc18] p-2 rounded-md' href='#'>
                            <Twitter />
                        </Link>
                        <Link className='bg-[#c1dc18] p-2 rounded-md' href='#'>
                            <LinkedinIcon />
                        </Link>
                        <Link className='bg-[#c1dc18] p-2 rounded-md' href='#'>
                            <Instagram />
                        </Link>
                        <Link className='bg-[#c1dc18] p-2 rounded-md' href='#'>
                            <Globe />
                        </Link>
                    </div>
                    <br />
                    <h3 className='text-2xl font-bold'>Contact Info</h3>
                    <div>
                        <div className='flex items-center mt-3 gap-4'>
                            <Phone
                                size='32'
                                className='text-[#c1dc18] bg-black p-1 rounded'
                            />{' '}
                            <div className='flex w-full justify-between items-center border-b-2 pb-1 border-b-[#c2dc1865]'>
                                <div className='text-[16px] text-black/80 font-medium'>
                                    Phone: +880 1234 567890
                                </div>
                                <div>
                                    <ChevronRight />
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center mt-3 gap-4'>
                            <Phone
                                size='32'
                                className='text-[#c1dc18] bg-black p-1 rounded'
                            />{' '}
                            <div className='flex w-full justify-between items-center border-b-2 pb-1 border-b-[#c2dc1865]'>
                                <div className='text-[16px] text-black/80 font-medium'>
                                    Whatsapp: +880 1234 567890
                                </div>
                                <div>
                                    <ChevronRight />
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center mt-3 gap-4'>
                            <Mail
                                size='32'
                                className='text-[#c1dc18] bg-black p-1 rounded'
                            />{' '}
                            <div className='flex w-full justify-between items-center border-b-2 pb-1 border-b-[#c2dc1865]'>
                                <div className='text-[16px] text-black/80 font-medium'>
                                    Email: ashrafulislamdev01@gmail.com
                                </div>
                                <div>
                                    <ChevronRight />
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center mt-3 gap-4'>
                            <Globe
                                size='32'
                                className='text-[#c1dc18] bg-black p-1 rounded'
                            />{' '}
                            <div className='flex w-full justify-between items-center border-b-2 pb-1 border-b-[#c2dc1865]'>
                                <div className='text-[16px] text-black/80 font-medium'>
                                    Website: ashrafulislam.vercel.app
                                </div>
                                <div>
                                    <ChevronRight />
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center mt-3 gap-4'>
                            <MapPin
                                size='32'
                                className='text-[#c1dc18] bg-black p-1 rounded'
                            />{' '}
                            <div className='flex w-full justify-between items-center border-b-2 pb-1 border-b-[#c2dc1865]'>
                                <div className='text-[16px] text-black/80 font-medium'>
                                    Location: Road 01, Nikunja-2, Khilkhet, Dhaka
                                </div>
                                <div>
                                    <ChevronRight />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <h3 className='text-2xl font-bold'>Bio</h3>
                    <p className='text-[14px] text-black/80 font-medium mt-3'>
                        I am a dedicated real estate professional with over 7 years of
                        experience in Dhaka’s property market. Specialized in luxury
                        apartments in Gulshan & Banani, I believe in transparency and
                        client-first service.
                    </p>
                    <p className='text-[14px] text-black/80 font-medium mt-3'>
                        Whether you're buying, selling, or renting, I provide personalized
                        solutions to meet your unique needs. Let's turn your real estate
                        dreams into reality!
                    </p>
                    <br />
                    <hr />
                    <br />
                    <h3 className='text-2xl font-bold'>Company Info</h3>
                    <div>
                        <br />
                        <Image
                            src='/real-estate/company.jpg'
                            width={400}
                            height={400}
                            alt='company-logo'
                            className='w-full h-full object-cover'
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = '/real-estate/default-company.jpg';
                            }}
                            priority
                        />
                        <br />
                        <h3 className='text-[14px] text-black/80 font-medium mt-3'>
                            <span className='font-bold text-[#c1dc18]'>
                                Royce Developer LTD
                            </span>{' '}
                            is a leading real estate company in Dhaka, Bangladesh,
                            specializing in luxury residential and commercial properties.
                            With a commitment to quality and customer satisfaction, Royce
                            Developer LTD has built a reputation for excellence in the real
                            estate market.
                            <p className='mt-2'>
                                Founded in 2010, the company has successfully completed
                                numerous projects, ranging from high-end apartments to
                                commercial office
                            </p>
                        </h3>
                    </div>
                    <br />
                    <h3 className='text-2xl font-bold'>Company Social Media</h3>
                    <div className='flex items-center justify-between gap-4 mt-3'>
                        <Link className='bg-[#c1dc18] p-2 rounded-md' href='#'>
                            <Facebook />
                        </Link>
                        <Link className='bg-[#c1dc18] p-2 rounded-md' href='#'>
                            <Youtube />
                        </Link>
                        <Link className='bg-[#c1dc18] p-2 rounded-md' href='#'>
                            <Twitter />
                        </Link>
                        <Link className='bg-[#c1dc18] p-2 rounded-md' href='#'>
                            <LinkedinIcon />
                        </Link>
                        <Link className='bg-[#c1dc18] p-2 rounded-md' href='#'>
                            <Instagram />
                        </Link>
                        <Link className='bg-[#c1dc18] p-2 rounded-md' href='#'>
                            <Globe />
                        </Link>
                    </div>
                    <br />
                    <h3 className='text-2xl font-bold'>Company Address</h3>
                    <div className='bg-[#c1dc18] p-4 rounded-md mt-3'>
                        <h2 className='font-bold text-[16px] pb-2 flex items-center gap-2'>
                            {' '}
                            <Building
                                className='bg-[#fff] text-black p-2 rounded'
                                size='36'
                            />{' '}
                            Head Office
                        </h2>
                        <p className='text-[15px] text-black/80 font-medium mt-3'>
                            123 Real Estate Ave, Dhaka 1212, Bangladesh
                        </p>
                        <p className='text-[15px] text-black/80 font-medium mt-1'>
                            <span className='font-bold'>Phone:</span> +880 9876 543210
                        </p>
                        <p className='text-[15px] text-black/80 font-medium mt-1'>
                            <span className='font-bold'>Email:</span>{' '}
                            roycedeveloperltd@gmail.com{' '}
                        </p>
                    </div>
                    <div className='bg-[#c1dc18] p-4 rounded-md mt-3'>
                        <h2 className='font-bold text-[16px] pb-2 flex items-center gap-2'>
                            {' '}
                            <Building
                                className='bg-[#fff] text-black p-2 rounded'
                                size='36'
                            />{' '}
                            Uttara Office
                        </h2>
                        <p className='text-[15px] text-black/80 font-medium mt-3'>
                            123 Real Estate Ave, Dhaka 1212, Bangladesh
                        </p>
                        <p className='text-[15px] text-black/80 font-medium mt-1'>
                            <span className='font-bold'>Phone:</span> +880 9876 543210
                        </p>
                        <p className='text-[15px] text-black/80 font-medium mt-1'>
                            <span className='font-bold'>Email:</span>{' '}
                            roycedeveloperltd@gmail.com{' '}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-[#c1dc18] pt-4'>
            <div className='bg-white rounded-3xl  p-4'>
                <h3 className='text-2xl font-bold text-'>Gallery</h3>
                <Gallery />
            </div>
        </div>
        <div className='bg-[#c1dc18] pt-4'>
            <div className='bg-white rounded-t-3xl p-4'>
                <h3 className='text-2xl font-bold text-'>Our Services</h3>
                <div className='relative mt-4'>
                    <HeroVideoDialog
                        className='block dark:hidden'
                        animationStyle='from-center'
                        videoSrc='https://www.youtube.com/embed/EZRB9XzBj54?si=K-QyWr1lry6NYSfc'
                        thumbnailSrc='/real-estate/yt.avif'
                        thumbnailAlt='Hero Video'
                    />
                    <HeroVideoDialog
                        className='hidden dark:block'
                        animationStyle='from-center'
                        videoSrc='https://www.youtube.com/embed/EZRB9XzBj54?si=K-QyWr1lry6NYSfc'
                        thumbnailSrc='/real-estate/yt.avif'
                        thumbnailAlt='Hero Video'
                    />
                </div>
                <br />
                <h3 className='text-2xl font-bold text-'>Our Running Project</h3>
                <RunningProject/>
                <br />
                <h3 className='text-2xl font-bold text-'>Feature Projects</h3>
                <RunningProject/>
                <br />
                <h3 className='text-2xl font-bold text-'>MY QR Code</h3>
                <QR/>
                {/* <h3 className='text-2xl font-bold text-'>Enquiry Form</h3> */}
                <EnquiryForm/>
                <br />
            </div>
        </div>
    </div>
    </div>
)
}

export default page
