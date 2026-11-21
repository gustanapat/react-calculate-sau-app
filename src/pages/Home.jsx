import calculate from '../assets/calculate.png'
import CardMenu from '../components/CardMenu'
import bmi from '../assets/bmi.png'
import bmr from '../assets/bmr.png'
import car from '../assets/car.png'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="home-page">
      <main className="home-main">
        <header className="home-header">
          <img src={calculate} alt="" />
          <h1>เครื่องมือคำนวณออนไลน์</h1>
          <p>เลือกการคำนวณที่คุณต้องการจากรายการด้านล่าง</p>
        </header>

        <nav className="home-menu" aria-label="รายการเครื่องมือคำนวณ">
          <CardMenu
            to="/bmi"
            showTitle="BMI (ดัชนีมวลกาย)"
            showPic={bmi}
            showDetail="คำนวณว่าน้ำหนักของคุณเหมาะสมกับส่วนสูงหรือไม่"
          />
          <CardMenu
            to="/bmr"
            showTitle="BMR (อัตราการเผาผลาญ)"
            showPic={bmr}
            showDetail="คำนวณพลังงานขั้นต่ำที่ร่างกายต้องการในแต่ละวัน"
          />
          <CardMenu
            to="/carinstallment"
            showTitle="การผ่อนชำระรถยนต์"
            showPic={car}
            showDetail="คำนวณยอดผ่อนต่อเดือนและดอกเบี้ยรถยนต์"
          />
        </nav>
      </main>
      <Footer />
    </div>
  )
}
