import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'
import openSea from './icons/boat.svg'
import zorb from './icons/zorb.svg'

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    return (
      <div className="container">
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img
                        src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.png`}
                        />
                        <p className={obj.colorway === "HotCold" ? "hotCold" : obj.colorway === "Indiglo" ? "indiglo" : obj.colorway === "RoseGold" ? "roseGold" : obj.colorway === "Aether" ? "aether" : "gold"}>{obj.name}</p>
                        <div className="traits">
                        <table>
                        <tbody>
                        <tr>
                        <td>
                        <b>Species</b> {obj.species}
                        </td>
                        <td>
                        <b>Architecture</b> {obj.architecture}
                        </td>
                        <td>
                        <b>Colorway</b> {obj.colorway}
                        </td>
                        <td>
                        <b>Layout</b> {obj.layout}
                        </td>
                        <td>
                        <b>Spirit</b> {obj.spirit}
                        </td>
                        <td>
                        <b>Evolution</b> {obj.Evolution}
                        </td>
                        </tr>
                        </tbody>
                        </table>
                        </div>
                    </div>
                )
            })}

        </div>
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
        </div>

    )
}
