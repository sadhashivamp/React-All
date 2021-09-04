import { Avatar } from '@material-ui/core'
import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css"
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
      </div>
    );
  };
 const Testimonials = () => {
    return (
        <div>
            <div className="test">
                <div className="test-box">
                    <h1 className="test-header">What Others Say About Us</h1>
                    <p className="test-para">“Good buildings come from good people, and all problems are solved by good design.”</p>
                </div>
            </div>

            <div className="test-card" style={{ display: "flex", justifyContent: "center", marginTop: 50}}>
                <div style={{width: "50%", textAlign: "center"}}>
                    <h1 style={{marginBottom: 20}}>TESTIMONIALS</h1>
                    <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
                        <Card img="https://www.thearoralawfirm.com/wp-content/uploads/2021/01/testimonials_man3.png" />
                        <Card img="https://www.thearoralawfirm.com/wp-content/uploads/2021/01/testimonials_woman3.png" />
                        <Card img="https://www.thearoralawfirm.com/wp-content/uploads/2021/01/testimonials_man2.png" />
                    </Slider>
                </div>
            </div>

        </div>
    )
}

const Card = ({img}) => {
    return(
        <div style={{display:"flex", alignItems:"center", flexDirection: "column", textAlign: "center", color: "gray"}}>
            <Avatar src={img} 
            style={{
                width:120,
                height:120,
                border: "1px solid lightgray",
                padding: 7,
                marginBottom: 20
            }}/>
            <p style={{fontStyle: "italic"}}>"@Lets Build Construction is one of the best general contractors we've worked with. The entire team tactfully delivered a project of exceptional quality while staying on schedule and under budget. We hope to work with @Lets Build again in the near future!"</p>
            <p style={{fontStyle: "italic", marginTop: 25}}><span style={{fontWeight: 500, color: "green"}}>PAULA WILSON</span>, Media Analyst</p>
        </div>
    )
}
export default Testimonials


