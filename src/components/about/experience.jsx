import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";
import "./styles/experience.css";

import React from 'react'

const experience = () => {
  return (
    <div className="experience">
        <Card>
            icon={faBriefcase}
            title="Experience"
        </Card>
    </div>
  )
}

export default experience