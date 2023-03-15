import {
    Container, Image,
} from '@chakra-ui/react'
import React from 'react'
import SlideCard from './SlideCard'

const slide1 = {
    imageURL:'https://firebasestorage.googleapis.com/v0/b/morning-donuts-d5e7f.appspot.com/o/bday-v2.JPG?alt=media&token=6435888f-5326-4db5-81a7-4fbe113e0725',
    title:'Birthday Donuts',
    description:'Custom order letter donuts for birthdays or any special event.',
    alt:'Birthday letter doughnuts',
}

const slide2 = {
    imageURL:'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/donuts%2Fcoffee-cropped-md.png?alt=media&token=395384e8-5406-4a5b-ace9-eb0ec0603fc0',
    title:'Coffee',
    description:'Fresh brewed coffee everyday.',
    alt:'Coffee',
}

const slide3 = {
    imageURL: 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/donuts%2Fmixed%20dozen%20copy.jpg?alt=media&token=b1012b44-be46-4d88-9fa4-4a09d2122525',
    title: 'Mixed Dozen',
    description:'Grab a dozen mixed donuts',
    alt: 'Mixed Dozen Doughnuts',
}

const slide4 = {
    imageURL: 'https://firebasestorage.googleapis.com/v0/b/morning-donuts-d5e7f.appspot.com/o/srolls.jpg?alt=media&token=adf6feea-3302-4409-bc8d-ddfb27163694',
    title: 'Sausage Rolls',
    description:'Our sausage rolls are handmade and baked fresh everyday. ',
    alt:'Sausage Rolls',
}

const slide5 = {
    imageURL: 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/donuts%2FCRONUT.jpg?alt=media&token=c9afa7dd-32b9-4f85-8bfb-d9fa67f95306',
    title: 'Cronut',
    description: 'Our specialty cronut is made out of croissant dough and covered in  a sweet glaze.',
    alt: 'Cronut',
}



function SlideShow() {
    return (
        <>
            <div className="slideshow">
                <Container className="parent-slide" id="slide-container">
                    <div className="slide">
                        <img src={slide1.imageURL} alt={slide1.alt} />
                        <div className="caption">
                            <h3>{slide1.title}</h3>
                            <p>{slide1.description}</p>

                        </div>
                    </div>

                    <div className="slide">
                        <img src={ slide2.imageURL } alt={ slide2.alt }  />
                        <div className="caption">
                            <h3>{slide2.title}</h3>
                            <p>{slide2.description}</p>
                        </div>
                    </div>

                    <div className="slide">
                        <img src={ slide3.imageURL } alt={ slide3.alt }  />
                        <div className="caption">
                            <h3>{slide3.title}</h3>
                            <p>{slide3.description}</p>
                        </div>
                    </div>

                    <div className="slide">
                        <img src={ slide4.imageURL } alt={ slide4.alt }  />
                        <div className="caption">
                            <h3>{ slide4.title }</h3>
                            <p>{ slide4.description }</p>
                        </div>
                    </div>

                    <div className="slide">
                        <img src={ slide5.imageURL } alt={ slide5.alt }  />
                        <div className="caption">
                            <h3>{ slide5.title }</h3>
                            <p>{ slide5.description }</p>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default SlideShow