import React, { useState } from 'react'
import ImageModal from '../Image Modal/ImageModal'
import ProjectListItemLeft from '../ProjectSide/projectListLeftItem'
import ProjectListItemRight from '../ProjectSide/ProjectListRightItem'

interface TableDataType {
  project?: any
  filterValue?: any
}

const ProjectListSection = (props: TableDataType) => {
  const buttonData = [
    { id: '1', label: 'All', filterValue: 0 },
    { id: '3', label: 'Ongoing', filterValue: 'Ongoing' },
    { id: '2', label: 'Completed', filterValue: 'Completed' },
    { id: '4', label: 'Upcoming', filterValue: 'Upcoming' },
  ]

  const project = props.project || []

  const sortedProjects = [...project].sort((a: any, b: any) => {
    const yearA = parseInt(a.year, 10) || 0
    const yearB = parseInt(b.year, 10) || 0
    return yearB - yearA // Descending: Largest (Newest) year first
  })

  const [selectValue, setSelecteValue] = useState('1')
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState<any>()

  const handleImageClick = (ProjectsPreviewData: any) => {
    const images =
      ProjectsPreviewData.images !== null &&
      ProjectsPreviewData.images.map((t: any) => t.image_path)
    const data = ProjectsPreviewData.thumbnail_image_path
    if (ProjectsPreviewData.images !== null) {
      setModalImage([data, ...images])
    } else {
      setModalImage([data])
    }
    setModalOpen(true)
  }

  return (
    <>
      <div className="max-w-4xl mx-auto p-2">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 justify-center">
          {buttonData.map((button, index) => (
            <button
              key={index}
              type="button"
              id={button.id}
              className={
                selectValue === button.id
                  ? `text-white bg-[#C59648] font-bold rounded-md text-base px-3 py-2 text-center`
                  : `text-black font-bold rounded-md text-base px-3 py-2 text-center ${props.filterValue === button.filterValue
                    ? 'bg-[#C59648]'
                    : 'bg-transparent border border-[#C59648]'
                  }`
              }
              onClick={() => {
                setSelecteValue(button.id)
                props.filterValue(button.filterValue)
              }}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col grid-cols-9 py-10 mx-6 md:mx-10 lg:mx-16 xl:mx-24 md:grid">
        {sortedProjects?.map((value: any, index: any) =>
          index % 2 === 0 ? (
            <ProjectListItemLeft
              key={value.id}
              value={value}
              handleImageClick={handleImageClick}
            />
          ) : (
            <ProjectListItemRight
              key={value.id}
              value={value}
              handleImageClick={handleImageClick}
            />
          )
        )}
      </div>
      <ImageModal
        isOpen={modalOpen}
        imageUrl={modalImage}
        onClose={() => setModalOpen(false)}
      />
    </>
  )
}

export default ProjectListSection
