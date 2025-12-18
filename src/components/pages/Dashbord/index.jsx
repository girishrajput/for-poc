import React from 'react'

import Business from "../Dashbord/Business"
import GgrNgrBarChart from '../../charts/GgrNgrBarChart';
import AverageRegistrations from '../Dashbord/AverageRegistrations';
import OrganicRegistrations from '../../charts/OrganicRegistrations';
import OrganicFTD from '../../charts/OrganicFTD'


const Dashboard = () => {
  return (
    <div>
      <Business />
      <GgrNgrBarChart/>
      <AverageRegistrations/>
      <OrganicRegistrations/>
      <OrganicFTD />

    </div>
  )
}

export default Dashboard
