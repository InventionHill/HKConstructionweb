import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useCareer } from '../../framework/basic-react/auth/careerGet'
import { Controller, useForm } from 'react-hook-form'
import { useCareerPost } from '../../framework/basic-react/auth/careerPost'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const defaultValues = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  career_id: '',
  experience: '',
  city: '',
  state: '',
  resume: '',
}

const SUPPORTED_FORMATS = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'image/jpeg',
  'image/png',
  'image/webp',
]

const schema = yup.object().shape({
  first_name: yup
    .string()
    .required('first_name is a required field')
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      'Name can only contain Latin letters.',
    ),

  last_name: yup
    .string()
    .required('last_name is a required field')
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      'Name can only contain Latin letters.',
    ),

  email: yup
    .string()
    .required('Email Id is a required field')
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please Enter Valid Email address',
    ),

  phone: yup
    .string()
    .required('Phone Number is a required field')
    .matches(/^(?!0)(?:[1-9][0-9]*)$/, 'Write Valid mobile number')
    .test('isTenDigits', 'Mobile number must be 10 digits', (value: any) => {
      return value && /^\d{10}$/.test(value.replace(/\D/g, ''))
    }),

  experience: yup.string().required('Total Experience is a required field'),

  city: yup.string().required('Total Experience is a required field'),

  state: yup.string().required('Total Experience is a required field'),

  career_id: yup.string().required('career is a required field'),

  resume: yup
    .mixed()
    .test('fileSize', 'Please upload valid file', (value: any) => {
      if (!value || !value[0]) {
        return false
      }
      return value[0].size <= 1048576
    })
    .test('fileType', 'Unsupported file format', (value: any) => {
      if (!value || !value[0]) {
        return false
      }
      return SUPPORTED_FORMATS.includes(value[0].type)
    })
    .nullable()
    .required('Document is required'),
})

const CareerSection = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false)
  const { data: careerData, isSuccess: careerSuccess } = useCareer()
  const [careerList, setCareerList] = useState<any>()
  const [file, setfile] = useState<any>()

  const {
    isSuccess: careersucess,
    mutate: fetchcareer,
    isError,
    isLoading,
  } = useCareerPost()

  useEffect(() => {
    if (careerSuccess) {
      setCareerList(careerData?.data)
    }
  }, [careerSuccess])

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  const onSubmit = async (data: any) => {
    const payload: any = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phone: data.phone,
      career_id: data.career_id,
      experience: data.experience,
      city: data.city,
      state: data.state,
      resume: file[0],
    }
    try {
      await fetchcareer(payload)
    } catch (error) {
      toast.error('Failed to submit form. Please try again later.')
    }
  }

  useEffect(() => {
    if (careersucess) {
      reset(defaultValues)
      setfile([''])
      toast.success('Form submitted successfully!')
    }
    if (isError) {
      toast.error('Something Went Wrong')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [careersucess, isError])

  return (
    <div className="flex flex-col md:flex-row justify-center sm:px-6 lg:px-20">
      {/* SIDE SECTION ACCORDION */}
      <div className="w-full md:w-1/2 p-3">
        <div className="text-2xl font-bold mb-6">Open Position</div>
        {careerList?.map((item: any) => (
          <Accordion
            key={item?.id}
            expanded={expanded === item?.id}
            onChange={handleChange(item?.id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${item?.id}-content`}
              id={item?.id}
            >
              <Typography
                sx={{ width: '33%', flexShrink: 0 }}
                className="uppercase"
              >
                {item?.designation}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {item?.description} <br />
                Requirement : {item?.requirement}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      {/* CAREER FORM */}
      <div className="w-full md:w-1/2 p-6">
        <div className="text-2xl font-bold mb-6">Apply Now</div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="gap-2 space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-7 open"
        >
          {/* First Name */}
          <div>
            <Controller
              name="first_name"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <input
                  value={value}
                  type="text"
                  onBlur={onBlur}
                  onChange={onChange}
                  name="first_name"
                  id="first_name"
                  className="block w-full px-5 py-1 border-gray-400 border-2 rounded-md border-input-focus focus:border-1 focus:border-borderColor md:py-1.5  text-primaryColor ring-0 ring-inset placeholder:text-textFourthColor sm:text-sm sm:leading-6"
                  placeholder="First Name"
                  autoComplete="off"
                />
              )}
            />
            {errors.first_name && (
              <p className="text-sm absolute text-red-700 animate-fade-down">
                {errors.first_name.message}
              </p>
            )}
          </div>

          {/* last Name */}
          <div>
            <Controller
              name="last_name"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <input
                  value={value}
                  type="text"
                  onBlur={onBlur}
                  onChange={onChange}
                  name="last_name"
                  id="last_name"
                  className="block w-full px-5 py-1 border-gray-400 border-2 rounded-md border-input-focus focus:border-1 focus:border-borderColor md:py-1.5  text-primaryColor ring-0 ring-inset placeholder:text-textFourthColor sm:text-sm sm:leading-6"
                  placeholder="last Name"
                  autoComplete="off"
                />
              )}
            />
            {errors.last_name && (
              <p className="text-sm absolute text-red-700 animate-fade-down">
                {errors.last_name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  className="block w-full border-gray-400 px-5 py-1 border-2 rounded-md border-input-focus focus:border-1 focus:border-borderColor md:py-1.5  text-primaryColor ring-0 ring-inset placeholder:text-textFourthColor sm:text-sm sm:leading-6"
                  placeholder="Email Id"
                  autoComplete="off"
                />
              )}
            />
            {errors.email && (
              <p className="text-sm absolute text-red-700 animate-fade-down">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Mobile Number */}
          <div>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 flex items-center p-2 border-r pointer-events-none">
                <p className="text-primaryColor">+91</p>
              </div>

              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <input
                    type="tel"
                    maxLength={10}
                    id="phone"
                    name="phone"
                    value={field.value}
                    onBlur={field.onBlur}
                    onChange={(e) => {
                      const numericValue = e.target.value.replace(/\D/g, '')
                      field.onChange(numericValue)
                    }}
                    className="block w-full px-5 border-gray-400 py-1 border-2 rounded-md border-input-focus focus:border-1 focus:border-borderColor md:py-1.5  text-primaryColor ring-0 ring-inset placeholder:text-textFourthColor sm:text-sm sm:leading-6 pl-14"
                    placeholder="Phone Number"
                  />
                )}
              />
            </div>
            {errors.phone && (
              <p className="text-sm absolute text-red-700 animate-fade-down">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* City Name */}
          <div>
            <Controller
              name="city"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <input
                  value={value}
                  type="text"
                  onBlur={onBlur}
                  onChange={onChange}
                  name="city"
                  id="city"
                  className="block w-full px-5 py-1 border-gray-400 border-2 rounded-md border-input-focus focus:border-1 focus:border-borderColor md:py-1.5  text-primaryColor ring-0 ring-inset placeholder:text-textFourthColor sm:text-sm sm:leading-6"
                  placeholder="City"
                  autoComplete="off"
                />
              )}
            />
            {errors.city && (
              <p className="text-sm absolute text-red-700 animate-fade-down">
                {errors.city.message}
              </p>
            )}
          </div>

          {/* State Name */}
          <div>
            <Controller
              name="state"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <input
                  value={value}
                  type="text"
                  onBlur={onBlur}
                  onChange={onChange}
                  name="state"
                  id="state"
                  className="block w-full px-5 py-1 border-gray-400 border-2 rounded-md border-input-focus focus:border-1 focus:border-borderColor md:py-1.5  text-primaryColor ring-0 ring-inset placeholder:text-textFourthColor sm:text-sm sm:leading-6"
                  placeholder="State"
                  autoComplete="off"
                />
              )}
            />
            {errors.state && (
              <p className="text-sm absolute text-red-700 animate-fade-down">
                {errors.state.message}
              </p>
            )}
          </div>

          {/* Total Exp */}
          <div>
            <Controller
              name="experience"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <input
                  value={value}
                  type="text"
                  onBlur={onBlur}
                  onChange={onChange}
                  name="experience"
                  id="experience"
                  className="block w-full px-5 py-1 border-gray-400 border-2 rounded-md border-input-focus focus:border-1 focus:border-borderColor md:py-1.5  text-primaryColor ring-0 ring-inset placeholder:text-textFourthColor sm:text-sm sm:leading-6"
                  placeholder="Experience"
                />
              )}
            />
            {errors.experience && (
              <p className="text-sm absolute text-red-700 animate-fade-down">
                {errors.experience.message}
              </p>
            )}
          </div>

          {/* career drop down */}
          <div>
            <div className="relative flex items-center ">
              <Controller
                name="career_id"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <select
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    defaultValue={'None'}
                    id="career_id"
                    name="career_id"
                    className="w-full px-5 py-1 border-gray-400 border-2 rounded-md border-input-focus focus:border-1 focus:border-borderColor md:py-2  text-gray-400 ring-0 ring-inset placeholder:text-textFourthColor sm:text-sm sm:leading-6"
                  >
                    <option selected hidden>
                      Select Career
                    </option>
                    {careerList?.map((item: any) => (
                      <option
                        key={item?.id}
                        value={item?.id}
                        className="uppercase"
                      >
                        {item?.designation}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
            {errors.career_id && (
              <p className="text-sm absolute text-red-700 animate-fade-down">
                {errors.career_id.message}
              </p>
            )}
          </div>

          {/* document */}
          <div className="md:col-span-2">
            <p className="mb-1 text-xs text-textFourthColor md:text-sm md:mb-3">
              Upload Resume
            </p>
            <Controller
              name="resume"
              control={control}
              render={({ field }) => (
                <input
                  className="mt-3 block w-full cursor-pointer border-gray-400 border-2 rounded-md text-sm text-gray-900 file:bg-black file:py-1 file:text-white focus:outline-none"
                  id="multiple_files"
                  type="file"
                  onChange={(e) => {
                    field.onChange(e.target.files)
                    setfile(e.target.files)
                  }}
                  multiple
                />
              )}
            />
            <p className="text-xs text-gray-400 md:text-sm">
              *File Size Should Be Less then 1Mb / You can upload only .pdf /
              .doc / .docx / .jpeg / .png / .webp file
            </p>
            {errors.resume && (
              <p className="text-sm absolute text-red-700 animate-fade-down">
                {errors.resume.message}
              </p>
            )}
          </div>

          <div className="justify-center px-4 py-3 x sm:flex sm:px-6 md:col-span-2 open">
            <button
              disabled={isLoading}
              className="relative inline-flex items-center justify-start px-4  py-2 overflow-hidden transition-all bg-transparent border-2 border-l-8 btn border-primaryColor hover:bg-transparent group"
            >
              {!isLoading ? (
                <>
                  <span className="absolute left-0 w-0 h-full transition-all duration-1000 ease-in-out bg-primaryColor group-hover:w-full group-hover:h-full -z-1"></span>
                  <span className="z-10 w-full transition duration-1000 ease-in-out text-black font-medium group-hover:text-secondaryColor">
                    Submit
                  </span>
                </>
              ) : (
                <>
                  <span className="absolute left-0 w-0 h-full transition-all duration-1000 ease-in-out bg-primaryColor group-hover:w-full group-hover:h-full -z-1"></span>
                  <span className="z-10 w-full transition duration-1000 ease-in-out text-black font-medium group-hover:text-secondaryColor">
                    Submit
                  </span>
                  <div className="loader" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default CareerSection
