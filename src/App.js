
import { useState } from "react"

function App() {
  const [defVal, setdefVal] = useState(500)
  const [val, setval] = useState('0')
  const [Trans] = useState([])

  const Add = () => {
    if (val !== "0") {
      let valOne = Number(val)
      let valTwo = Number(defVal)
      let newdate = new Date()
      let date = newdate.getDate()
      let month = 1 + newdate.getMonth()
      let year = newdate.getFullYear()
      let hour = newdate.getHours()
      let min = newdate.getMinutes()

      setdefVal(valOne + valTwo)
      Trans.push(`${year}-${month}-${date}  ${hour}:${min} - ${val} - Add`)
      setval('0')
    }
  }
  const Remove = () => {
    if (val !== "0") {
      if (val <= defVal) {
        let valOne = Number(val)
        let valTwo = Number(defVal)
        let newdate = new Date()
        let date = newdate.getDate()
        let month = 1 + newdate.getMonth()
        let year = newdate.getFullYear()
        let hour = newdate.getHours()
        let min = newdate.getMinutes()
        let setVal = valOne - valTwo
        setdefVal(Math.abs(setVal))

        Trans.push(`${year}-${month}-${date}  ${hour}:${min} - ${val} - Remove`)
        setval("0")
      }
      else alert(`You have only ${defVal}`)
    }
  }
  return (
    <>
      <div className="container mt-5">
        <h3 className="d-flex justify-content-center" >
          Expense Tracker-Basic Task
        </h3>
        <div className="border border-dark mb-2  ">
          <center>
            <h4 >Balance : {defVal}</h4>
            <input type="number" step="50" min="0" value={val} onChange={e => setval(e.target.value)} ></input>
            <br />
            <br />
            <input type="button" className="btn btn-primary" value="Add" onClick={Add} />
            <input type="button" className="btn btn-danger mx-2" value="Remove" onClick={Remove}></input>
          </center>
          <br />


        </div>
        <br />
        <div className="border border-dark" >
          <h3 className="mx-3 mt-3" >Transactions :</h3>
          <div className="mx-5">

            {Trans.length === 0 ? <h5 className="mx-5" > No Transaction</h5> : Trans.map((value, index) => {
              return <h5 className="mx-5" key={index}> {value}</h5>

            }
            )}
          </div>

        </div>
      </div>

    </>
  );
}

export default App;
