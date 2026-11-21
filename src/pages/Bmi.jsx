import bmi from '../assets/bmi.png'
import CalculatorLayout, { NumberField } from '../components/CalculatorLayout'

export default function Bmi() {
  return (
    <CalculatorLayout
      variant="bmi"
      title="BMI Calculator"
      subtitle="คำนวณ BMI"
      image={bmi}
      calculateLabel="คำนวณ BMI"
      result={<>ค่า BMI ที่คำนวณได้: <strong>0.00</strong></>}
    >
      <NumberField name="weight" label="ป้อนน้ำหนัก (กิโลกรัม)" placeholder="เช่น 65" />
      <NumberField name="height" label="ป้อนส่วนสูง (เซนติเมตร)" placeholder="เช่น 170" />
    </CalculatorLayout>
  )
}
