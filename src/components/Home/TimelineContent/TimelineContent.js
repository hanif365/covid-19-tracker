import React from 'react';
import './TimelineContent.css'

const TimelineContent = (props) => {
    console.log(props.timeline);
    const { confirmed, deaths, recovered, new_confirmed, new_deaths, new_recovered, date, active } = props.timeline;
    return (
        <div>
            {/* <div class="card timeline-content-card my-3">
                
                <div className="card-body text-center">
                    <p class="card-text">Date: {date}</p>
                </div>
                <div class="card-body d-flex justify-content-between">
                    <div>
                        <p class="card-text">Total Cases:<span className="hr"></span> {confirmed}</p>
                        <p class="card-text">Total Deaths:<span className="hr"></span> {deaths}</p>
                        <p class="card-text">Total Recovered:<span className="hr"></span> {recovered}</p>
                    </div>
                    <div>
                        <p class="card-text">New Cases:<span className="hr"></span> {new_confirmed}</p>
                        <p class="card-text">New Deaths:<span className="hr"></span> {new_deaths}</p>
                        <p class="card-text">New Recovered:<span className="hr"></span> {new_recovered}</p>
                    </div>


                  
                </div>
                <div className="card-body text-center">
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div> */}

            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="..." class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default TimelineContent;