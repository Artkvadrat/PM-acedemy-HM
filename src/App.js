import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import GeneralInfoPage from "./components/generalInfoPage/GeneralInfoPage";
import EducationInfoPage from "./components/educationInfoPage/EducationInfoPage";
import WorkInfoPage from "./components/workInfoPage/WorkInfoPage";
import ResumePage from "./components/resumePage/ResumePage";

const App = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/general-info'>
                    <GeneralInfoPage />
                </Route>
                <Route path='/education-info'>
                    <EducationInfoPage/>
                </Route>
                <Route path='/work-info'>
                    <WorkInfoPage/>
                </Route>
                <Route path='/resume'>
                    <ResumePage />
                </Route>
                <Route path='/'>
                    <Redirect to='/general-info'/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
