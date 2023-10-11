import React from 'react'
import ProjectSection from './content/ProjectSection'
import AboutSection from './content/AboutSection'
import ContactSection from './content/ContactSection'
import ImageofLocation from './content/ImageofLocation'

function PageContent() {
    return (<>
        <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
            <ProjectSection />
            <AboutSection />
            <ContactSection />
            <ImageofLocation />
        </div>
    </>)
}

export default PageContent