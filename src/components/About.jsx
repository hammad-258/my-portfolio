import profileImg from '../assets/profile.jpg'
function About() {
  return (<div className="flex w-full ">
    <main className="w-[60%]">
      <section className="max-w-3xl mx-auto px-6 pt-24">
        <h1 className="text-5xl ps-5 md:text-right font-bold text-yellow-100 cedarville-cursive-regular">
          Hi, I'm Hammad
        </h1>
      </section>
      <section id="about" className="max-w-3xl mx-auto px-6 py-16 pb-0 md:ms-73">
        <div className="text-gray-300 text-[16px] jetbrains-mono-regular md:text-right leading-relaxed ">
          <p>I like to learn things and make stuff</p>
          <p>...or make things and learn stuff? </p>           
        </div>
    <div className="pt-5 px-2 overflow-auto">
      <p className="instrument-serif-regular text-[28px] w-[100%] md:w-[100%] text-white leading-relaxed">
        Pre-final year Engineering undergraduate at ZHCET, Aligarh Muslim University.</p>
    </div>
      </section>
    </main>
    <div className="w-[40%] m-auto ms-0 mt-20 ">
    <figure className="bg-white rotate-[4.4deg] p-2 md:p-3 mt-25 md:mt-0 shadow-[10px_10px_0px_0px_rgba(35,35,35,1)] w-34 md:w-64 transition-all duration-300 ease-out hover:rotate-[-3deg] hover:scale-110 hover:shadow-2xl">
      <img
      onContextMenu={(e) => e.preventDefault()}
      src={profileImg}
      alt="my-image"
      className="w-34 md:w-64 grayscale-[65%] contrast-[1.15]"
      />
      <figcaption className="text-black mt-3 cedarville-cursive-regular">just waiting for the food</figcaption>
    </figure>
    </div>
  </div>
  );
}

export default About;