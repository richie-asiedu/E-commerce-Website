import React from 'react'
import './DressStyleGrid.css'
import CasualPic from '@/assets/CasualPic.png'
import FormalPic from '@/assets/FormalPic.png'
import PartyPic from '@/assets/PartyPic.png'
import GymPic from '@/assets/GymPic.png'

const styles = [
  { name: 'Casual', img: CasualPic },
  { name: 'Formal', img: FormalPic },
  { name: 'Party', img: PartyPic },
  { name: 'Gym', img: GymPic }
]

const DressStyleGrid = () => (
  <section className="dress-style-section">
    <h2 className="dress-style-title">BROWSE BY DRESS STYLE</h2>
    <div className="dress-style-grid">
      {styles.map(style => (
        <div className="dress-style-card" key={style.name}>
          <span className="dress-style-label">{style.name}</span>
          <img src={style.img} alt={style.name} className="dress-style-img" />
        </div>
      ))}
    </div>
  </section>
)

export default DressStyleGrid 