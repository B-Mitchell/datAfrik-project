'use client'
import React, {useState,useEffect, useRef} from 'react'
import { FaArrowRightLong  } from 'react-icons/fa6'
import { FaGithub } from "react-icons/fa"
import Footer from './Footer'

const Main = () => {
    const [isVisible, setIsVisible] = useState(false);
  const animatedSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = animatedSectionRef.current;
      if (section) {
        const topPosition = section.getBoundingClientRect().top;
        const bottomPosition = section.getBoundingClientRect().bottom;

        const isVisible = topPosition < window.innerHeight && bottomPosition >= 0;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      animatedSectionRef.current.classList.add('animate-bottom');
    }
  }, [isVisible]);
  return (
    <div>
        {/* HERO SECTION */}
        <h3 className='text-center mt-[7rem] font-bold md:text-[3rem] text-[2rem]'>It doesn't matter what <span className='text-[#FFFF00]'>JS<br /> Framework</span> you work with.</h3>
        <p className='text-center md:text-[1.5rem] text-[1rem]'>Our boilerplates work with <span className='text-[#91D2F7] font-bold'>out-of-the-box.</span></p>

        <div className='text-center  font-bold mt-4'>
            <button className='border border-[#FFFF00] rounded-sm bg-[#FFFF00] text-black hover:bg-black inline-flex hover:text-[#FFFF00] py-1 px-3 mr-2 hover:scale-105 transition'>Get started <FaArrowRightLong className='mt-1 ml-2' /></button>

            <button className='border border-[#FFFF00] rounded-sm bg-black text-[#FFFF00] hover:bg-[#FFFF00] inline-flex hover:text-black py-1 px-3 ml-2 hover:scale-105 transition'>See repo <FaGithub className='mt-1 ml-2'/></button>
        </div>

        <section ref={animatedSectionRef} className='animated-section mt-[15rem] m-auto'>
            <p className='text-center mb-1'>supported and backed by:</p>
            <div className='grid md:grid-cols-4 grid-cols-3 gap-3 md:w-[60%] w-[90%] text-center m-auto mt-4 text-black font-bold'>
                <div className='bg-[#D9D9D9] py-2 px-4  text-center flex justify-center items-center '>Lorem</div>
                <div className='bg-[#D9D9D9] py-2 px-4  text-center flex justify-center items-center'>Ipsum</div>
                <div className='bg-[#D9D9D9] py-2 px-4  text-center flex justify-center items-center'>Dolor</div>
                <div className='bg-[#D9D9D9] py-2 px-4  text-center flex justify-center items-center'>Sit</div>
                <div className='bg-[#D9D9D9] py-2 px-4  text-center flex justify-center items-center'>Dolor</div>
                <div className='bg-[#D9D9D9] py-2 px-4  text-center flex justify-center items-center'>Sit</div>
                <div className='bg-[#D9D9D9] py-2 px-4  text-center flex justify-center items-center'>Lorem</div>
                <div className='bg-[#D9D9D9] py-2 px-4  text-center flex justify-center items-center'>Ipsum</div>
            </div>
            <h4 className='text-center md:text-[2rem] text-[1.5rem] mt-3'>Less Code, More Product</h4>
            <p className='text-center font-light md:text-[1rem] text-[.8rem]'>By using our UI Kit, we make sure you only get to <span className='text-[#FFFF00]'>focus more</span> on <br /> the other things that matter.</p>
        </section>


        <div  className='mt-[8rem] m-auto w-[80%]'>
            <h3 className='font-bold text-[2rem] mb-4'>About</h3>
            <p className='leading-4 font-bold text-[.8rem]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Cras pulvinar mattis nunc sed blandit libero volutpat. Odio ut enim blandit volutpat maecenas volutpat. Sapien eget mi proin sed libero enim. Amet facilisis magna etiam tempor. Facilisi cras fermentum odio eu feugiat pretium nibh. Nibh tellus molestie nunc non blandit. Integer enim neque volutpat ac tincidunt vitae semper quis. Gravida rutrum quisque non tellus. Et pharetra pharetra massa massa ultricies mi quis. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Eget sit amet tellus cras adipiscing enim eu turpis. Volutpat commodo sed egestas egestas fringilla. Dui accumsan sit amet nulla. Morbi quis commodo odio aenean sed adipiscing. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Interdum posuere lorem ipsum dolor. Dolor magna eget est lorem ipsum dolor. Nibh nisl condimentum id venenatis.
                <br/>
                <br/>
                Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Mi bibendum neque egestas congue quisque egestas diam in arcu. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Arcu dictum varius duis at consectetur lorem. In nibh mauris cursus mattis molestie. Velit ut tortor pretium viverra suspendisse potenti nullam ac. Vivamus at augue eget arcu dictum varius. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Volutpat odio facilisis mauris sit amet massa vitae tortor condimentum. Morbi quis commodo odio aenean sed adipiscing diam donec. Nullam vehicula ipsum a arcu. Arcu non odio euismod lacinia at. Odio tempor orci dapibus ultrices in iaculis.
                <br/>
                <br />
                Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Est velit egestas dui id. Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel. Sed felis eget velit aliquet sagittis id consectetur. Consequat interdum varius sit amet mattis. Adipiscing elit pellentesque habitant morbi tristique. Elit eget gravida cum sociis natoque penatibus et magnis dis. Sit amet nisl purus in mollis nunc. In nulla posuere sollicitudin aliquam. Ut tortor pretium viverra suspendisse potenti. Facilisi etiam dignissim diam quis enim. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Pellentesque massa placerat duis ultricies lacus. Donec massa sapien faucibus et molestie. Ac turpis egestas sed tempus urna et pharetra. At lectus urna duis convallis convallis tellus. Egestas diam in arcu cursus euismod quis viverra. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel.
            </p>
        </div>

        <form className='w-[80%] m-auto mt-10 text-black'>
          <p className='font-bold text-[2rem] mb-4 text-white'>Contact</p>

          <div className='md:w-[70%] w-[100%] m-auto'>
            <p className='text-center font-bold text-[.9rem] mb- text-white'>fill out this form to reach us.</p>

            <div className='w-[100%] flex justify-between mb-2 outline-none'>
              <input placeholder='First Name' className='w-[49%] p-2 outline-none rounded-sm focus:scale-105 transition' required/>
              <input placeholder='Last Name' className='w-[49%] p-2 outline-none rounded-sm focus:scale-105 transition' required/>
            </div>

            <input placeholder='Email' className='block w-[100%] mb-4 p-2 outline-none rounded-sm focus:scale-105 transition' required/>
            <input placeholder='Phone (optional)' className='block w-[100%] mb-4 p-2 outline-none rounded-sm focus:scale-105 transition'/>
            <textarea placeholder='Message' required className='block min-h-[6rem] w-[100%] rounded-sm p-2 outline-none focus:scale-105 transition'/>
            <button className='block bg-[#91D2F7] m-auto w-[25%] px-3 py-1 mt-3 hover:scale-105 transition rounded-sm'>Send</button>
          </div>
        </form>

        <div className='grid md:grid-cols-4 grid-cols-2 gap-2 w-[60%] m-auto mt-16'>
          <div className='w-[100%] m-auto text-center mt-0'>
            {/* className='flex justify-center items-center' */}
            <p className='font-bold'>Lorem</p>
            <p >Ipsum</p>
            <p >Ipsum</p>
            <p >Ipsum</p>
            <p >Ipsum</p>
            <p >Ipsum</p>
          </div>

          <div className='w-[100%] m-auto text-center mt-0'>
          <p className='font-bold'>Lorem</p>
            <p >Ipsum</p>
            <p >Ipsum</p>

            <p className='font-bold mt-3'>Lorem</p>
            <p >Ipsum</p>
            <p >Ipsum</p>
          </div>

          <div className='w-[100%] m-auto text-center mt-0'>
          <p className='font-bold'>Lorem</p>
            <p >Ipsum</p>
            <p >Ipsum</p>
            <p >Ipsum</p>
            <p >Ipsum</p>
            <p >Ipsum</p>
          </div>

          <div className='w-[100%] m-auto text-center mt-0'>
          <p className='font-bold'>Lorem</p>
            <p >Ipsum</p>
            <p >Ipsum</p>
            <p >Ipsum</p>

            <p className='font-bold mt-3'>Lorem</p>
            <p >Ipsum</p>
            <p >Ipsum</p>
          </div>
        </div>

        <Footer />
    </div>
  )
}

export default Main