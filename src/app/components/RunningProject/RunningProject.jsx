'use client'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/bundle'

const projects = [
  {
    image: '/real-estate/r1.jpg',
    title: 'Sunset Villas',
    location: 'Bangkok, Thailand',
    price: '12,000,000',
    status: 'In Progress',
    description: 'Luxury villas with private pools and gardens.'
  },
  {
    image: '/real-estate/cover.jpg',
    title: 'Skyline Residence',
    location: 'Chiang Mai, Thailand',
    price: '8,500,000',
    status: 'In Progress',
    description: 'Modern condos with city views and amenities.'
  },
  {
    image: '/public/real-estate/profile.jpg',
    title: 'Green Park Homes',
    location: 'Phuket, Thailand',
    price: '15,000,000',
    status: 'In Progress',
    description: 'Eco-friendly homes near the beach.'
  }
]

const cardStyle = {
  background: '#fff',
  border: '1px solid #e5e7eb',
  borderRadius: '10px',
  boxShadow: 'none',
  //   padding: 18,
  margin: '0 0px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start'
}

const RunningProject = () => {
  return (
    <div
      style={{
        width: '100%',
        margin: '16px auto',
        position: 'relative',
        paddingBottom: 0
      }}
    >
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        style={{ paddingBottom: 40 }}
      >
        {projects.map((project, idx) => (
          <SwiperSlide key={idx}>
            <div style={cardStyle}>
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: 140,
                  objectFit: 'cover',
                  borderRadius: '6px',
                  marginBottom: 10,
                  background: '#f3f4f6'
                }}
              />
              <div className='p-4'>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: 18,
                    marginBottom: 2,
                    color: '#222'
                  }}
                >
                  {project.title}
                </div>
                <div style={{ color: '#666', fontSize: 14, marginBottom: 2 }}>
                  {project.location}
                </div>
                <div
                  style={{
                    color: '#c1dc18',
                    fontWeight: 500,
                    fontSize: 14,
                    marginBottom: 2
                  }}
                >
                  {project.price} BDT
                </div>

                <div
                  style={{
                    fontSize: 14,
                    color: '#444',
                    textAlign: 'left',
                    lineHeight: 1.5
                  }}
                >
                  {project.description}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default RunningProject
