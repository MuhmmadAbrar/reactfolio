import React from "react";
import { faPen, faPencil } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";
import "./styles/skills.css"


const skills = () => {
  return (
    <div className="skills">
        <Card>
            icon={faPencil}
            title="Skills"
            body={
                <div className="skillsection">
                    <div className="skillbox">
                        <div className="sectiontitle"
                            Frontend Development
                        />
                        <div className="skilltitle">
                            HTML CSS JavaScript ReactJS
                        </div>
                    </div>
                    <div className="skillbox">
                        <div className="sectiontitle"
                            Backend Development
                        />
                        <div className="skilltitle">
                            Flask Node JS Firebase Supabase
                        </div>        
                    </div>
                    <div className="skillbox">
                        <div className="sectiontitle"
                            Android Development
                        />
                        <div className="skilltitle">
                            Kotlin Dart Flutter Android Studio
                        </div>
                    </div>
                </div>
                
            }
        </Card>
    </div>
  )
}

export default skills