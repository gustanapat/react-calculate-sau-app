import bmr from '../assets/bmr.png'
import CalculatorLayout, { NumberField } from '../components/CalculatorLayout'

export default function Bmr() {
  return (
    <CalculatorLayout
      variant="bmr"
      title="BMR Calculator"
      subtitle="คำนวณ BMR"
      image={bmr}
      calculateLabel="คำนวณ BMR"
      result={<>ค่า BMR ที่คำนวณได้: <strong>0.00</strong></>}
    >
      <NumberField name="weight" label="ป้อนน้ำหนัก (กิโลกรัม)" />
      <NumberField name="height" label="ป้อนส่วนสูง (เซนติเมตร)" />
      <NumberField name="age" label="ป้อนอายุ (ปี)" />
      <fieldset className="calculator-options">
        <legend>เพศ:</legend>
        <div className="radio-options radio-options--stacked">
          <label><input type="radio" name="gender" value="male" defaultChecked /> ชาย</label>
          <label><input type="radio" name="gender" value="female" /> หญิง</label>
        </div>
      </fieldset>
    </CalculatorLayout>
  )
}
