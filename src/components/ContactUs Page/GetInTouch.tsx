/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-console */
import React, { useContext } from 'react'
import MainButton from '../Buttons/ButtonEffects'
import { CompanyInfoContext } from '../../contexts/company_info/company_info'
import { useContactUs } from '../../framework/basic-react/auth/contactUs'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'

interface GetInTouchType {
  GetInTouchData?: any
}

interface FormInputs {
  fullName: string
  email: string
  phonecode: string
  phone: string
  subject: string
  message: string
}

const GetInTouchSection = (props: GetInTouchType) => {
  const { mutate: contactUs } = useContactUs()
  const { companyInfo } = useContext(CompanyInfoContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>()

  function onSubmit({
    fullName,
    email,
    phonecode,
    phone,
    subject,
    message,
  }: FormInputs) {
    contactUs({
      full_name: fullName,
      email: email,
      phonecode: phonecode,
      phone: phone,
      subject: subject,
      message: message,
    })
    toast.success('Form submitted successfully!')
    reset()
  }

  return (
    <>
      <div className="mx-4 my-16 md:mx-10 lg:mx-16 anybody">
        {props.GetInTouchData?.map((item: any, i: any) => (
          <div className="space-y-20" key={i}>
            <div className="space-y-4">
              <img
                src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${companyInfo?.sm_logo_image_path}`}
                className="w-12 h-12 mx-auto inset-x-1/2"
                alt="Mini Logo"
              />
              <div className="text-base font-medium text-center text-primaryColor">
                {item.title}
              </div>
              <div className="text-4xl font-medium text-center">
                {item.heading}
              </div>
              <div className="mx-auto text-base font-medium text-center md:w-3/5 lg:w-2/5">
                {item.discretion}
              </div>
            </div>

            <div className="grid items-center gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="border w-full h-full left-12 border-[#6B6868] rounded-md py-8 px-8 space-y-5">
                <img
                  className="right-0 mx-auto"
                  src="images/ContactUsPage/ImgIcon5.svg"
                  alt="Img Icon 5"
                />
                <div className="text-3xl font-semibold text-center text-primaryColor">
                  Address
                </div>
                <div className="text-base text-center">
                  {companyInfo?.address}
                </div>
              </div>
              <div className="border w-full h-full left-12 border-[#6B6868] rounded-md py-8 px-8 space-y-5">
                <img
                  className="right-0 mx-auto"
                  src="images/ContactUsPage/ImgIcon6.svg"
                  alt="Img Icon 6"
                />
                <div className="text-3xl font-semibold text-center text-primaryColor">
                  Email
                </div>
                <div className="text-base text-center">
                  <a href={`mailto:${companyInfo?.company_email}`}>
                    {companyInfo?.company_email}
                  </a>
                </div>
              </div>
              <div className="border w-full h-full left-12 border-[#6B6868] rounded-md py-8 px-8 space-y-5">
                <img
                  className="right-0 mx-auto"
                  src="images/ContactUsPage/ImgIcon7.svg"
                  alt="Img Icon 7"
                />
                <div className="text-3xl font-semibold text-center text-primaryColor">
                  Office Time
                </div>
                <div className="text-base text-center">
                  {companyInfo?.office_time}
                </div>
              </div>
              <div className="border w-full h-full left-12 border-[#6B6868] rounded-md py-8 px-8 space-y-5">
                <img
                  className="right-0 mx-auto"
                  src="images/ContactUsPage/ImgIcon8.svg"
                  alt="Img Icon 8"
                />
                <div className="text-3xl font-semibold text-center text-primaryColor">
                  Phone
                </div>
                <div className="text-base text-center">
                  <a href={`tel:${companyInfo?.company_phone}`}>
                    +91 {companyInfo?.company_phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-cover bg-center bg-[url('/images/HomePage/img3.png')] py-16 md:px-20">
        <div className="space-y-12">
          <div className="space-y-4">
            <img
              src={`${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${companyInfo?.sm_logo_image_path}`}
              className="w-12 h-12 mx-auto inset-x-1/2"
              alt="Mini Logo"
            />
            <div className="text-base font-medium text-center text-primaryColor">
              CONTACT INFO
            </div>
            <div className="mx-auto text-4xl font-medium text-center md:w-1/2 lg:w-1/4">
              Have Questions? Get In Touch!
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-3">
              <div>
                <input
                  type="text"
                  id="fullName"
                  className="w-full px-5 py-2.5 text-base leading-tight border-[#6B6868] text-[#ABABAB] bg-[#FAFAFB] border rounded appearance-none focus:outline-none focus:bg-[#FAFAFB] focus:border-primaryColor focus:border-2"
                  placeholder="Full Name*"
                  {...register('fullName', {
                    required: 'Full Name is required',
                  })}
                />
                {errors.fullName && (
                  <div className="text-red-500">{errors.fullName.message}</div>
                )}
              </div>

              <div>
                <input
                  type="text"
                  id="email"
                  className="w-full px-5 py-2.5 text-base leading-tight border-[#6B6868] text-[#ABABAB] bg-[#FAFAFB] border rounded appearance-none focus:outline-none focus:bg-[#FAFAFB] focus:border-primaryColor focus:border-2"
                  placeholder="Email Id*"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email && (
                  <div className="text-red-500">{errors.email.message}</div>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-3">
              <div className="flex w-full rounded-md shadow-sm">
                <div className="flex-1">
                  <input
                    type="text"
                    id="mobile"
                    className="w-full px-5 py-2.5 text-base rounded-r-md leading-tight border-l border text-[#ABABAB] bg-[#FAFAFB] border-[#6B6868] rounded appearance-none focus:outline-none focus:bg-[#FAFAFB] focus:border-primaryColor focus:border-2"
                    placeholder="Mobile Number*"
                    {...register('phone', {
                      required: 'Mobile Number is required',
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: 'Invalid mobile number',
                      },
                    })}
                  />
                  {errors.phone && (
                    <div className="text-red-500">{errors.phone.message}</div>
                  )}
                </div>
              </div>

              <div className="w-full">
                <input
                  type="text"
                  id="subject"
                  className="w-full px-5 py-2.5 text-base leading-tight border-[#6B6868] text-[#ABABAB] bg-[#FAFAFB] border rounded appearance-none focus:outline-none focus:bg-[#FAFAFB] focus:border-primaryColor focus:border-2"
                  placeholder="Subject"
                  {...register('subject', {
                    required: 'Subject is required',
                  })}
                />
                {errors.subject && (
                  <div className="text-red-500">{errors.subject.message}</div>
                )}
              </div>
            </div>

            <div className="p-3">
              <textarea
                id="about"
                rows={4}
                className="block w-full rounded-md border border-[#6B6868] focus:outline-none bg-[#FAFAFB] py-1.5 text-[#ABABAB] p-3  placeholder:text-gray-400 focus:border-primaryColor focus:border-2"
                placeholder="Message*"
                {...register('message', {
                  required: 'Message is required',
                })}
              />
              {errors.message && (
                <div className="text-red-500">{errors.message.message}</div>
              )}
            </div>

            <div className="flex justify-center p-3">
              <MainButton
                ButtonName2="Get In Touch"
                Button2={true}
                onClick={undefined}
              />
            </div>
          </form>
        </div>
      </div>

      <div className="my-20">
        <iframe
          src={companyInfo?.map_link}
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  )
}

export default GetInTouchSection
