import { FiChevronDown } from 'react-icons/fi'
import car from '../assets/car.png'
import CalculatorLayout, { NumberField } from '../components/CalculatorLayout'

const downPayments = [15, 20, 25, 30, 35]
const installmentTerms = [24, 36, 48, 60, 72, 84]

export default function Car() {
  return (
    <CalculatorLayout
      variant="car"
      title="Car Installment Calculator"
      subtitle="คำนวณ Car Installment"
      image={car}
      calculateLabel="คำนวณ"
      resetLabel="ล้างข้อมูล"
      result="ผ่อนชำระต่อเดือน: 0.00 บาท"
    >
      <label className="calculator-field">
        <span>ชื่อผู้คำนวณ</span>
        <input type="text" name="name" />
      </label>
      <NumberField name="price" label="ราคารถ (บาท)" />
      <NumberField name="interest" label="ดอกเบี้ยต่อปี (%)" />

      <fieldset className="calculator-options">
        <legend>เงินดาวน์ (%)</legend>
        <div className="radio-options">
          {downPayments.map((percentage) => (
            <label key={percentage}>
              <input
                type="radio"
                name="downPayment"
                value={percentage}
                defaultChecked={percentage === 15}
              />
              {percentage}%
            </label>
          ))}
        </div>
      </fieldset>

      <label className="calculator-field">
        <span>จำนวนเดือนที่ผ่อน</span>
        <span className="calculator-select">
          <select name="months" defaultValue="24">
            {installmentTerms.map((months) => (
              <option key={months} value={months}>{months} เดือน</option>
            ))}
          </select>
          <FiChevronDown aria-hidden="true" />
        </span>
      </label>
    </CalculatorLayout>
  )
}
