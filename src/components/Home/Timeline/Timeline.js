import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../../App';
import TimelineContent from '../TimelineContent/TimelineContent';
import './Timeline.css'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Timeline = () => {

    const [timelines, setTimelines] = useContext(DataContext);

    const [current, setCurrent] = useState(0);
    const length = timelines.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(timelines) || timelines.length <= 0) {
        return null;
    }
    // const [timelines, setTimelines] = useState([]);

    // useEffect(() =>{
    //     fetch('https://corona-api.com/timeline')
    //     .then(res => res.json())
    //     .then(data => {
    //         // console.log(data);
    //         // console.log(data.data);
    //         const firstTenData = data.data.slice(0,10);
    //         setTimelines(firstTenData);
    //     })
    // }, [])
    return (
        <div className="timeline-container ">
            <div className="container py-5">
                <h2>COVID-19 CORONAVIRUS PANDEMIC</h2>
                <div className=" slider">
                    <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                    <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
                    {
                        timelines.map((timeline, index) => {
                            // return <TimelineContent timeline={timeline}></TimelineContent>
                            return (
                                <div
                                    className={index === current ? 'slide active' : 'slide'}
                                    key={index}
                                >
                                    {index === current && (
                                        // <img src={timelines?.confirmed} alt='travel image' className='image' />
                                        // <h1 className="image">{timeline?.confirmed}</h1>
                                        <div class="card timeline-content-card my-3 image">

                                            <div className="card-body text-center">
                                                <p class="card-text">Date: {timeline.date}</p>
                                            </div>
                                            <div class="card-body d-flex justify-content-between">
                                                <div>
                                                    <p class="card-text">Total Cases:<span className="hr"></span> {timeline.confirmed}</p>
                                                    <p class="card-text">Total Deaths:<span className="hr"></span> {timeline.deaths}</p>
                                                    <p class="card-text">Total Recovered:<span className="hr"></span> {timeline.recovered}</p>
                                                </div>
                                                <div>
                                                    <p class="card-text">New Cases:<span className="hr"></span> {timeline.new_confirmed}</p>
                                                    <p class="card-text">New Deaths:<span className="hr"></span> {timeline.new_deaths}</p>
                                                    <p class="card-text">New Recovered:<span className="hr"></span> {timeline.new_recovered}</p>
                                                </div>



                                            </div>
                                            {/* <div className="card-body text-center">
                                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                            </div> */}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default Timeline;