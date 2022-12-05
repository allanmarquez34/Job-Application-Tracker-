import React from 'react'
import Search from "./search";
import AddApplicationForm from "./AddApplicationForm";
import ApplicationList from "./ApplicationList";

function ApplicationContainer(){


    return (
        <div>
            <Search />
            <AddApplicationForm />
            <ApplicationList />
        </div>
    )

}


export default ApplicationContainer
