import './index.css'

const CountryStats = props => {
  const {stateWiseData} = props
  let confirmedCases = 0
  let deceasedCases = 0
  let recoveredCases = 0
  stateWiseData.forEach(state => {
    confirmedCases += state.confirmedCases
    deceasedCases += state.deceasedCases
    recoveredCases += state.recoveredCases
  })
  const activeCases = confirmedCases - (recoveredCases + deceasedCases)

  return (
    <ul className="stats-container">
      <div className={`confirmed-card ${'stat-card'}`}>
        <p>Confirmed</p>
        <img
          src="https://res.cloudinary.com/djy2od68c/image/upload/v1672747947/check-mark_1_zgzdjy.png"
          alt="country wide confirmed cases pic"
          className="pic-size"
        />
        <p>{confirmedCases}</p>
      </div>
      <div className={`active-card ${'stat-card'}`}>
        <p>Active</p>
        <img
          src="https://res.cloudinary.com/djy2od68c/image/upload/v1672748000/protection_1_kwud79.png"
          alt="country wide active cases pic"
          className="pic-size"
        />
        <p>{activeCases}</p>
      </div>
      <div className={`recovered-card ${'stat-card'}`}>
        <p>Recovered</p>
        <img
          src="https://res.cloudinary.com/djy2od68c/image/upload/v1672748049/recovered_1_1_fhgv0r.png"
          alt="country wide recovered cases pic"
          className="pic-size"
        />
        <p>{recoveredCases}</p>
      </div>
      <div className={`deceased-card ${'stat-card'}`}>
        <p>Deceased</p>
        <img
          src="https://res.cloudinary.com/djy2od68c/image/upload/v1672748066/breathing_1_ya1lcf.png"
          alt="country wide deceased cases pic"
          className="pic-size"
        />
        <p>{deceasedCases}</p>
      </div>
    </ul>
  )
}

export default CountryStats
