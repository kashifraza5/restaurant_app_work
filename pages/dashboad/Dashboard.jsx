import CountriesList from "../../components/dashboard/CountriesList"
import CustomersList from "../../components/dashboard/CustomersList"
import Crads from "../../utils/Crads"

const Dashboard = () => {
  return (
    <div>
      <Crads/>
     <div className="flex gap-10 mx-6 py-4">
     <CountriesList/>
     <CustomersList/>
     </div>
    </div>
  )
}

export default Dashboard
