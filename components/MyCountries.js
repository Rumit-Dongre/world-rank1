import React from 'react'
import styles from './MyCountries.module.css'
const MyCountries = ({ country }) => {
    // console.log(country[0].name.common)

    {
        country.map((count) => {
            // console.log(count)

        })
    }
    return (
        <>


            {/* <div className={styles.countriestable}>
                <div className={styles.innertable}>

                    <div className={styles.namecol}>
                        <h1> Name </h1>


                        {
                            country.map((count) => {

                                return <>
                                    <p> {count.name.common} </p>
                                    <p> {count.area} </p>
                                    <p> {count.population} </p>
                                </>

                            })
                        }
                    </div>
                    <div className={styles.namecol}>
                        <h1> Area </h1>
                    </div>
                    <div className={styles.namecol}>
                        <h1> Population </h1>
                    </div>
                </div>

            </div> */}


            <table>
                <tr>
                    <th>Name</th>
                    <th>Area</th>
                    <th>Population</th>
                </tr>

                {
                    country.map((count) => {

                        return <>


                            <tr key={count.name}>
                                <td> {count.name.common}</td>
                                <td>{count.area}</td>
                                <td> {count.population}</td>
                            </tr>

                        </>

                    })
                }

            </table>
        </>
    )
}

export default MyCountries