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

  const [selectValue, setSelecteValue] = useState('1')
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState<any>()

  const handleImageClick = (ProjectsPreviewData: any) => {
    const images = ProjectsPreviewData.images !== null && ProjectsPreviewData.images.map((t: any) => t.image_path) 
    const data = ProjectsPreviewData.thumbnail_image_path
    if(ProjectsPreviewData.images !== null){
      setModalImage([data, ...images])
    }else{
      setModalImage([data])
    }
    setModalOpen(true)
  }

  return (
    <>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 justify-center mx-6 md:mx-10 lg:mx-96 p-2 mt-20">
        {buttonData.map((button, index) => (
          <button
            key={index}
            type="button"
            id={button.id}
            className={
              selectValue === button.id
                ? `text-white bg-[#C59648] font-bold rounded-md text-base px-3 py-2 text-center`
                : `text-black font-bold rounded-md text-base px-3 py-2 text-center ${
                    props.filterValue === button.filterValue
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

      <div className="flex flex-col grid-cols-9 p-10 mx-auto md:grid mt-10">
        {project?.map((value: any, index: any) =>
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
          ),
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
