import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import PartnerLogoSection from '../../components/Home Page/PartnerLogo'
import BannerOtherPage from '../../components/Home Page/OtherPageBanner'
import ProjectDetailSection from '../../components/OurProject/projectListDetail'
import { useOurPartner } from '../../framework/basic-react/auth/partnerData'
import { useOurProject } from '../../framework/basic-react/auth/ourProject'

const ProjectDetail = () => {
    const router = useRouter()
    const { id } = router.query

    const { data: ourPartner } = useOurPartner()
    const { data: projectsData, mutate: fetchProjects, isLoading } = useOurProject()
    const [projectData, setProjectData] = useState<any>()

    useEffect(() => {
        fetchProjects(0) // Fetch all projects to find the matching ID
    }, [fetchProjects])

    useEffect(() => {
        if (projectsData?.data?.data && id) {
            const allProjects = projectsData.data.data
            const foundProject = allProjects.find((p: any) => String(p.id) === String(id))

            const specificationList = foundProject.specification
                ? foundProject.specification.split(',').filter((s: string) => s.trim() !== '')
                : []

            // Map backend response specifically to the ProjectDetailSection UI requirement format
            const mappedData = [
                {
                    title: foundProject.project_status === 'Completed' ? 'RESIDENTIAL ARCHITECTURE' : 'PROJECT CATEGORY',
                    hedging: foundProject.name || 'Project Name',
                    architect_name: foundProject.architecture || '-',
                    plane: [
                        {
                            imgSrc: foundProject.thumbnail_image_path
                                ? `${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${foundProject.thumbnail_image_path}`
                                : '',
                            architect: foundProject.architecture || '-',
                            are_of_construction: foundProject.area_of_construction || '-',
                            no_of_buildings: foundProject.no_of_building || '-',
                            no_of_storeys: foundProject.no_of_stories || '-',
                            location: foundProject.location || '-',
                        },
                    ],
                    description: [
                        { name: foundProject.project_description || 'No description available for this project. Achieving decarbonisation through retrofit. Sed do eiusmod tempor incididunt ut labore.' },
                        { name: 'A Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.' }
                    ],
                    list: specificationList.length > 0
                        ? specificationList.map((str: string) => ({ name: str.trim() }))
                        : [
                            { name: 'Reprehenderit in voluptate velit esse cillum' },
                            { name: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod te' },
                            { name: 'Nisi ut aliquip ex ea commodo consequat' }
                        ],
                    imgList: foundProject.images
                        ? foundProject.images.map((img: any) => ({
                            imgSrc: `${process.env.NEXT_PUBLIC_IMG_ENDPOINT}${img.image_path}`
                        }))
                        : [
                            { imgSrc: 'images/HomePage/img4.svg' },
                            { imgSrc: 'images/HomePage/img5.svg' },
                            { imgSrc: 'images/HomePage/img6.svg' }
                        ],
                },
            ]
            setProjectData(mappedData)
        }
    }, [projectsData, id])

    if (isLoading || !projectData) {
        return (
            <div className="flex h-screen items-center justify-center">
                <div className="loader"></div>
            </div>
        )
    }

    return (
        <div>
            <div className="space-y-16 lg:space-y-24">
                <div className="lg:pageBanner">
                    <BannerOtherPage
                        ImgSrc="/images/OurProject/ProjectBanner.svg"
                        hedging="Project Detail"
                        PageName="Project Detail"
                    />
                </div>
                <ProjectDetailSection ProjectDetailData={projectData} />
                <PartnerLogoSection PartnerLogoData={ourPartner} />
                <div></div>
            </div>
        </div>
    )
}

export default ProjectDetail
