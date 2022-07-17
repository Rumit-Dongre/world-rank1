import React, { useState } from 'react'
import styles from './MyCountries.module.css'


const MyCountries = ({ country }) => {
    // console.log(country)

    // {
    //     country.map((count) => {
    //         // console.log(count)

    //     })
    // }

    const [mycountry, setmycountry] = useState(country)

    const [populationflag, setpopulationflag] = useState(0)
    const [areaflag, setareaflag] = useState(0)
    const [nameflag, setnameflag] = useState(0)


    const orderbyPopu = (country) => {
        
        let data = [...country].sort((a, b) => {
            a.population < b.population ? 1 : -1
        })
        setmycountry(data)

    }



    return (
        <>

            <div className={styles.countrytable_outer}>

                <div className={styles.countrytable_inner}>
                    <div className={styles.head}>

                        <button> Name </button>
                        <button> Flags </button>
                        <button> Area </button>
                        <button onClick={() =>  orderbyPopu(country) }> Population </button>
                    </div>

                    <div className={styles.content}>

                        {
                            mycountry.map((count) => {

                                return <>

                                    <div className={styles.country_row}>

                                        <div><h1>Name: {count.name.common}</h1></div>

                                        <div> <img src={count.flags.png} className={styles.country_flags} /></div>

                                        <div> Area: {count.area}</div>
                                        <div > Population: {count.population}</div>


                                    </div>
                                    <hr />
                                </>


                            })
                        }


                    </div>
                </div>
            </div>







        </>
    )
}

export default MyCountries