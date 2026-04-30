import React, { useState } from 'react'
import AddSidebar from '../components/AddSidebar'
import Header from '../components/Header'
import RamadanGoals from '../components/RamadanGoals'

export default function Goals() {
     const [menuOpen, setMenuOpen] = useState(false)
          const toggleMenu = () => {
            setMenuOpen(!menuOpen);
          }

  return (
     <div className="flex">
        <div className="lg:flex-1/4">
          <AddSidebar menuOpen={menuOpen} />
        </div>

        <div className="lg:flex-3/3 flex-3/4 ">
          <Header toggleMenu={toggleMenu} menuOpen={menuOpen}  />

          {/* Goals Content */}
            <div className='grid grid-cols-12  pt-10' >
                <div className='col-span-12 '>
                  <RamadanGoals/>
                </div>
            </div>
        </div>
      </div>
  )
}
