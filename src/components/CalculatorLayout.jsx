import { Link } from 'react-router'

export function NumberField({ name, label, placeholder }) {
  return (
    <label className="calculator-field">
      <span>{label}</span>
      <input name={name} type="number" step="any" placeholder={placeholder} />
    </label>
  )
}

export default function CalculatorLayout({
  variant, title, subtitle, image, calculateLabel, resetLabel = 'รีเซ็ต', result, children,
}) {
  return (
    <main className={`calculator-page calculator-page--${variant}`}>
      <section className="calculator-card" aria-labelledby="calculator-title">
        <header className="calculator-header">
          <h1 id="calculator-title" lang="en">{title}</h1>
          <p>{subtitle}</p>
          <img className="calculator-illustration" src={image} alt="" />
        </header>

        <form className="calculator-form" onSubmit={(event) => event.preventDefault()}>
          {children}
          <div className="calculator-actions">
            <button type="submit" className="calculate-button">{calculateLabel}</button>
            <button type="reset" className="reset-button">{resetLabel}</button>
          </div>
        </form>

        <p className="calculator-result">{result}</p>
        <Link to="/" className="calculator-back">กลับหน้าหลัก</Link>
      </section>
    </main>
  )
}
