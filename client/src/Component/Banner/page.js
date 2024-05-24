import React from 'react'
import Image from 'next/image';
import { Carousel } from 'antd';


function banner() {
    const contentStyle = {
        height: '300px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        
      };
  return (
    <div className='container mx-auto px-4 rounded overflow-hidden'>
      <div className='  w-full  '>
      <Carousel autoplay>
    <div>
      <h3 style={contentStyle}><Image   
src="/assest/banner/img4.jpg"
width={1504}
height={1500}
alt="Picture of the author"
/> </h3>
    </div>
    <div>
      <h3 style={contentStyle}><Image width={1504}
                height={1500}
       src="/assest/banner/img3.jpg" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <Image width={1504}
                height={1500}
       src="/assest/banner/img1_mob.jpg" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <Image width={1504}
                height={1500}
       src="/assest/banner/img3_mobile.jpg" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <Image width={1504}
                height={1500}
       src="/assest/banner/img2.webp" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <Image width={1504}
                height={1500}
       src="/assest/banner/img1.webp" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <Image width={1504}
                height={1500}
       src="/assest/banner/img5.webp" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <Image width={1504}
                height={1500}
       src="/assest/banner/img2_mobile.webp" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <Image width={1504}
                height={1500}
       src="/assest/banner/img3_mobile.webp" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <Image width={1504}
                height={1500}
       src="/assest/banner/img4_mobile.webp" />
      </h3>
    </div><div>
      <h3 style={contentStyle}>
      <Image width={1504}
                height={1500}
       src="/assest/banner/img5_mobile.webp" />
      </h3>
    </div>
  </Carousel>
      </div>
    </div>
  )
}

export default banner

  
