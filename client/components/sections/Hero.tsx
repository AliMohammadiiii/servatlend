export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockups */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-[589px] h-[300px] md:h-[400px] lg:h-[502px] mx-auto">
              {/* Background Circle */}
              <div className="absolute left-20 top-0 w-[509px] h-[502px]">
                <div className="absolute inset-0 rounded-full bg-[#0C74C7] opacity-100" />
                
                {/* Phone 2 (Back) */}
                <div className="absolute left-[40%] lg:left-[215px] top-[60px] md:top-[80px] lg:top-[97px] z-10">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F2ccfcdc057424b9eb03a0d097a076671%2F0bab5631e76e478db924775309959c2f?format=webp&width=800"
                    alt="ثروت‌لند موبایل"
                    className="w-[120px] md:w-[180px] lg:w-[226px] h-auto object-contain drop-shadow-2xl"
                  />
                </div>

                {/* Phone 1 (Front) */}
                <div className="absolute left-[10%] md:left-[15%] lg:left-[45px] top-0 z-20">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F2ccfcdc057424b9eb03a0d097a076671%2F478d106c0e034bab973227beb9db804d?format=webp&width=800"
                    alt="اپلیکیشن ثروت‌لند"
                    className="w-[130px] md:w-[190px] lg:w-[236px] h-auto object-contain drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute left-[78px] top-[61px] w-[60px] h-[60px] rounded-full bg-[#0C74C7]/10 z-0" />
              
              <div className="absolute left-[411px] top-[100px] w-[90px] h-[90px] rounded-full bg-[#0C74C7]/10 flex items-center justify-center z-0">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets%2F2ccfcdc057424b9eb03a0d097a076671%2Fa8a7f39fc3004132bfe922b5dcb35520?format=webp&width=800" 
                  alt="" 
                  className="w-12 h-12"
                />
              </div>

              <div className="absolute left-[33px] top-[369px] w-[78px] h-[78px] rounded-full bg-[#0C74C7]/10 flex items-center justify-center z-0">
                <svg className="w-10 h-10 text-[#0C74C7]" fill="none" viewBox="0 0 41 41" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30.9689 30.2197H12.837C11.1515 30.2197 9.53412 29.5047 8.39343 28.2619C7.25274 27.019 6.6739 25.3505 6.8101 23.665L8.2232 6.70796C8.27427 6.18017 8.08698 5.66942 7.72945 5.27785C7.37192 4.88627 6.8782 4.68195 6.35041 4.68195H3.40506C2.70703 4.68195 2.12817 4.1031 2.12817 3.40506C2.12817 2.70703 2.70703 2.12817 3.40506 2.12817H6.36746C7.6103 2.12817 8.78501 2.65595 9.61925 3.55828C10.0789 4.06904 10.4194 4.66494 10.6067 5.32892H31.8712C33.5907 5.32892 35.1741 6.00992 36.3318 7.23573C37.4725 8.47857 38.0513 10.096 37.9151 11.8155L36.9958 24.5844C36.8085 27.7 34.0845 30.2197 30.9689 30.2197ZM10.6918 7.86566L9.36388 23.8693C9.27876 24.8568 9.60223 25.7932 10.2662 26.5253C10.9302 27.2573 11.8495 27.6489 12.837 27.6489H30.9689C32.7395 27.6489 34.3398 26.1507 34.476 24.3801L35.3954 11.6112C35.4635 10.6067 35.14 9.65333 34.476 8.95529C33.8121 8.24024 32.8927 7.84861 31.8882 7.84861H10.6918V7.86566Z" fill="currentColor"/>
                  <path d="M27.666 38.7322C25.7933 38.7322 24.261 37.1999 24.261 35.3272C24.261 33.4544 25.7933 31.9221 27.666 31.9221C29.5388 31.9221 31.0711 33.4544 31.0711 35.3272C31.0711 37.1999 29.5388 38.7322 27.666 38.7322ZM27.666 34.4759C27.1893 34.4759 26.8148 34.8505 26.8148 35.3272C26.8148 35.8039 27.1893 36.1784 27.666 36.1784C28.1427 36.1784 28.5173 35.8039 28.5173 35.3272C28.5173 34.8505 28.1427 34.4759 27.666 34.4759Z" fill="currentColor"/>
                  <path d="M14.0457 38.7322C12.1729 38.7322 10.6406 37.1999 10.6406 35.3272C10.6406 33.4544 12.1729 31.9221 14.0457 31.9221C15.9184 31.9221 17.4507 33.4544 17.4507 35.3272C17.4507 37.1999 15.9184 38.7322 14.0457 38.7322ZM14.0457 34.4759C13.569 34.4759 13.1944 34.8505 13.1944 35.3272C13.1944 35.8039 13.569 36.1784 14.0457 36.1784C14.5224 36.1784 14.8969 35.8039 14.8969 35.3272C14.8969 34.8505 14.5224 34.4759 14.0457 34.4759Z" fill="currentColor"/>
                  <path d="M35.753 14.897H15.3228C14.6248 14.897 14.0459 14.3182 14.0459 13.6202C14.0459 12.9221 14.6248 12.3433 15.3228 12.3433H35.753C36.4511 12.3433 37.0299 12.9221 37.0299 13.6202C37.0299 14.3182 36.4511 14.897 35.753 14.897Z" fill="currentColor"/>
                </svg>
              </div>

              <div className="absolute left-[356px] top-[18px] w-[54px] h-[54px] rounded-full bg-[#0C74C7]/10 flex items-center justify-center z-0">
                <svg className="w-8 h-8 text-[#0C74C7]" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5658 29.5102C7.87364 29.5102 1.62134 23.2579 1.62134 15.5658C1.62134 7.87364 7.87364 1.62134 15.5658 1.62134C23.2579 1.62134 29.5102 7.87364 29.5102 15.5658C29.5102 23.2579 23.2579 29.5102 15.5658 29.5102ZM15.5658 3.56707C8.95028 3.56707 3.56707 8.95028 3.56707 15.5658C3.56707 22.1813 8.95028 27.5645 15.5658 27.5645C22.1813 27.5645 27.5645 22.1813 27.5645 15.5658C27.5645 8.95028 22.1813 3.56707 15.5658 3.56707Z" fill="currentColor"/>
                  <path d="M13.7246 20.2097C13.4651 20.2097 13.2187 20.106 13.0371 19.9244L9.36612 16.2534C8.98994 15.8772 8.98994 15.2546 9.36612 14.8784C9.74229 14.5022 10.3649 14.5022 10.7411 14.8784L13.7246 17.8619L20.392 11.1945C20.7681 10.8183 21.3908 10.8183 21.7669 11.1945C22.1431 11.5707 22.1431 12.1933 21.7669 12.5695L14.4121 19.9244C14.2305 20.106 13.984 20.2097 13.7246 20.2097Z" fill="currentColor"/>
                </svg>
              </div>

              <div className="absolute left-[393px] top-[303px] w-[53px] h-[53px] rounded-full bg-[#0C74C7]/10 flex items-center justify-center z-0">
                <svg className="w-8 h-8 text-[#0C74C7]" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M21.4032 9.08008H9.7288C9.01277 9.08008 8.43164 9.6612 8.43164 10.3772V11.6744C8.43164 12.3904 9.01277 12.9716 9.7288 12.9716H21.4032C22.1192 12.9716 22.7004 12.3904 22.7004 11.6744V10.3772C22.7004 9.6612 22.1192 9.08008 21.4032 9.08008Z" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20.2243 9.07993L21.5163 6.49599C22.3387 4.8512 20.6303 3.08836 18.9609 3.85887L15.5662 5.42584L12.1716 3.85887C10.5021 3.08836 8.79378 4.8499 9.61618 6.49599L10.9081 9.07993" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.053 12.9716L7.82578 16.5349C6.24195 19.0695 6.40409 22.3228 8.23309 24.6875V24.6875C9.58473 26.4361 11.6706 27.4582 13.8809 27.4582H17.2522C19.4613 27.4582 21.5471 26.4348 22.8988 24.6875V24.6875C24.729 22.3228 24.8912 19.0695 23.3074 16.5336C22.6004 15.4012 21.8247 14.1611 21.0801 12.969" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div className="absolute left-0 top-[248px] w-[54px] h-[54px] rounded-full bg-[#0C74C7]/10 flex items-center justify-center z-0">
                <svg className="w-7 h-7 text-[#0C74C7]" fill="none" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.6165 14.2889H19.4575C18.9589 14.2889 18.5454 13.8754 18.5454 13.3769V4.87641C18.5454 3.97651 18.8981 3.13741 19.5304 2.50505C20.1628 1.87269 21.0019 1.52002 21.9018 1.52002H21.914C23.4341 1.53218 24.8691 2.12806 25.9635 3.21038C27.058 4.31701 27.6539 5.77632 27.6539 7.29642V10.2393C27.666 12.6594 26.0365 14.2889 23.6165 14.2889Z" fill="currentColor"/>
                  <path d="M10.9445 28.3712C10.3729 28.3712 9.83785 28.1523 9.43654 27.7388L7.41784 25.708C7.30839 25.5985 7.13814 25.5864 7.01653 25.6836L4.93703 27.2402C4.2925 27.7267 3.44124 27.8118 2.71159 27.447C1.98194 27.0821 1.53198 26.3525 1.53198 25.5377V7.29642C1.53198 3.62385 3.63581 1.52002 7.30839 1.52002H21.9014C22.4 1.52002 22.8135 1.93349 22.8135 2.43208C22.8135 2.93068 22.4 3.34415 21.9014 3.34415H7.30839C4.59652 3.34415 3.34395 4.59672 3.34395 7.29642V25.5377C3.34395 25.708 3.4534 25.7809 3.5142 25.8174C3.58717 25.8539 3.70878 25.8782 3.83039 25.7809L5.90989 24.2243C6.28688 23.9446 6.73683 23.7987 7.18678 23.7987C7.74618 23.7987 8.29342 24.0054 8.70689 24.4311L10.7256 26.4619C10.7986 26.5349 10.8958 26.5471 10.9445 26.5471C10.9931 26.5471 11.0904 26.5349 11.1634 26.4619L13.2064 24.4189C13.9604 23.6649 15.1521 23.592 15.9912 24.2365L18.0586 25.7809C18.1924 25.8782 18.314 25.8417 18.3748 25.8052C18.4356 25.7688 18.545 25.6958 18.545 25.5377V4.86425C18.545 4.31702 18.6788 3.7941 18.9098 3.34415H7.29623C4.59652 3.34415 3.34395 4.59672 3.34395 7.29642V25.5377C3.34395 25.708 3.4534 25.7809 3.5142 25.8174C3.58717 25.8539 3.70878 25.8782 3.83039 25.7809L5.90989 24.2243C6.28688 23.9446 6.73683 23.7987 7.18678 23.7987Z" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col items-end gap-12 order-1 lg:order-2">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-bold text-[#0C74C7]">ثروت‌لند</h1>
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2F2ccfcdc057424b9eb03a0d097a076671%2F0f708644f25242cfaa08e10c73a56fb7?format=webp&width=800" 
                alt="لوگو ثروت‌لند" 
                className="w-10 h-8"
              />
            </div>

            {/* Title and Description */}
            <div className="flex flex-col items-start gap-4 w-full">
              <h2 className="text-xl md:text-3xl lg:text-[40px] lg:leading-[42px] font-bold text-[#242933] text-right w-full">
                ثروت‌لند؛ معماری نوین وام‌دهی دیجیتال
              </h2>
              <p className="text-sm md:text-base leading-6 md:leading-[26px] font-medium text-[#4F545E] text-right">
                با ثروت‌لند، وام‌دهی آنلاین، شفاف و مبتنی بر داده را تجربه کن
              </p>
            </div>

            {/* CTA Button */}
            <button className="w-full max-w-[360px] h-12 bg-[#0C74C7] text-white rounded-xl font-bold text-sm hover:bg-[#0C74C7]/90 transition-colors shadow-lg hover:shadow-xl">
              ورود به اپلیکیشن ( به زودی )
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
