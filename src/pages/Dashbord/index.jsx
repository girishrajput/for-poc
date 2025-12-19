import React from 'react'

import Business from "../Dashbord/Business"
import AverageRegistrations from '../Dashbord/AverageRegistrations';
import OrganicFTD from '../../components/charts/OrganicFTD'
import GgrNgrBarChart from "../../components/charts/GgrNgrBarChart";
import OrganicRegistrations from "../../components/charts/OrganicRegistrations";


const Dashboard = () => {
  return (
    <div className='p-5'>
      <Business />
      <GgrNgrBarChart/>
      <AverageRegistrations/>
      <OrganicRegistrations/>
      <OrganicFTD />

    </div>
  )
}

export default Dashboard
