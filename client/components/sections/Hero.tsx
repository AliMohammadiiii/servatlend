export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-center h-14 border-b border-[#D6D9DF]/20">
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-bold text-[#0C74C7]">ثروت‌لند</h1>
          <img 
            src="/images/servatlendlogo.png" 
            alt="لوگو ثروت‌لند" 
            className="w-7 h-[22px]"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-[1440px] mx-auto">
          
          {/* Left Side - Phone Mockups (Desktop: left, Mobile: top) */}
          <div className="relative order-1 lg:order-2">
            <div className="relative w-full max-w-[590px] h-[260px] sm:h-[350px] lg:h-[502px] mx-auto lg:mx-0">
              {/* Floating Icons - Hidden on mobile */}
              <div className="hidden lg:block absolute left-[78px] top-[61px] w-[60px] h-[60px] rounded-full bg-[#0C74C7]/10" />
              
              <div className="hidden lg:flex absolute right-[78px] top-[100px] w-[90px] h-[90px] rounded-full bg-[#0C74C7]/10 items-center justify-center">
                <svg className="w-12 h-12 text-[#0C74C7]" fill="none" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.0376 13.2065V16.0326C18.0376 17.1907 18.7895 18.0272 19.9069 18.0272C21.0177 18.0272 21.7762 17.1905 21.7759 16.0597L21.7762 13.2065C21.7763 12.6009 22.2519 12.1253 22.8576 12.1252H24.0047V16.0021C24.0047 18.0889 22.3142 19.7794 19.9069 19.7794C17.4996 19.7794 15.8091 18.0889 15.8091 16.0021V12.1252H16.9562C17.5619 12.1252 18.0376 12.6009 18.0376 13.2065Z" fill="currentColor"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.5831 6.29932H13.7302V19.0283C13.7302 19.634 13.2545 20.1097 12.6488 20.1097H11.5017V7.38071C11.5017 6.77503 11.9774 6.29932 12.5831 6.29932Z" fill="currentColor"/>
                  <path d="M2.34229 6.29932L2.34223 10.6714C3.08428 9.99448 4.0126 9.58008 5.02803 9.58008C7.33195 9.58008 9.19849 11.6533 9.19849 14.2326C9.19849 14.2524 9.19838 14.2723 9.19816 14.2921C9.19838 14.3105 9.19849 14.3288 9.19849 14.3472C9.19816 16.9878 7.13759 19.0347 4.65039 19.0347C2.21183 19.0347 0.175707 16.9878 0.1029 14.4229L0.100098 14.4229V7.38071C0.100098 6.77207 0.582063 6.29932 1.18046 6.29932H2.34229ZM4.60373 11.6484C3.32241 11.6484 2.28224 12.7668 2.28224 14.1461C2.28224 15.5254 3.32241 16.6438 4.60373 16.6438C5.88505 16.6438 6.92521 15.5254 6.92521 14.1461C6.92521 12.7668 5.88505 11.6484 4.60373 11.6484Z" fill="currentColor"/>
                </svg>
              </div>

              <div className="hidden lg:flex absolute left-[33px] bottom-[133px] w-[78px] h-[78px] rounded-full bg-[#0C74C7]/10 items-center justify-center">
                <svg className="w-10 h-10 text-[#0C74C7]" fill="none" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.9163 15.5312H6.59749C5.73124 15.5312 4.89999 15.1638 4.31374 14.525C3.72749 13.8863 3.43 13.0287 3.5 12.1625L4.22625 3.4475C4.2525 3.17625 4.15624 2.91376 3.97249 2.71251C3.78874 2.51126 3.535 2.40625 3.26375 2.40625H1.75C1.39125 2.40625 1.09375 2.10875 1.09375 1.75C1.09375 1.39125 1.39125 1.09375 1.75 1.09375H3.2725C3.91125 1.09375 4.51499 1.365 4.94374 1.82875C5.17999 2.09125 5.355 2.3975 5.45125 2.73875H16.38C17.2638 2.73875 18.0775 3.08875 18.6725 3.71875C19.2587 4.3575 19.5563 5.18875 19.4863 6.0725L19.0137 12.635C18.9175 14.2363 17.5175 15.5312 15.9163 15.5312ZM5.495 4.0425L4.8125 12.2675C4.76875 12.775 4.935 13.2562 5.27625 13.6325C5.6175 14.0087 6.08999 14.21 6.59749 14.21H15.9163C16.8263 14.21 17.6488 13.44 17.7188 12.53L18.1912 5.96751C18.2262 5.45126 18.06 4.96126 17.7188 4.60251C17.3775 4.23501 16.905 4.03374 16.3887 4.03374H5.495V4.0425Z" fill="currentColor"/>
                  <path d="M14.2188 19.9062C13.2562 19.9062 12.4688 19.1188 12.4688 18.1562C12.4688 17.1937 13.2562 16.4062 14.2188 16.4062C15.1813 16.4062 15.9688 17.1937 15.9688 18.1562C15.9688 19.1188 15.1813 19.9062 14.2188 19.9062ZM14.2188 17.7188C13.9737 17.7188 13.7812 17.9112 13.7812 18.1562C13.7812 18.4013 13.9737 18.5938 14.2188 18.5938C14.4638 18.5938 14.6562 18.4013 14.6562 18.1562C14.6562 17.9112 14.4638 17.7188 14.2188 17.7188Z" fill="currentColor"/>
                  <path d="M7.21875 19.9062C6.25625 19.9062 5.46875 19.1188 5.46875 18.1562C5.46875 17.1937 6.25625 16.4062 7.21875 16.4062C8.18125 16.4062 8.96875 17.1937 8.96875 18.1562C8.96875 19.1188 8.18125 19.9062 7.21875 19.9062ZM7.21875 17.7188C6.97375 17.7188 6.78125 17.9112 6.78125 18.1562C6.78125 18.4013 6.97375 18.5938 7.21875 18.5938C7.46375 18.5938 7.65625 18.4013 7.65625 18.1562C7.65625 17.9112 7.46375 17.7188 7.21875 17.7188Z" fill="currentColor"/>
                  <path d="M18.375 7.65625H7.875C7.51625 7.65625 7.21875 7.35875 7.21875 7C7.21875 6.64125 7.51625 6.34375 7.875 6.34375H18.375C18.7337 6.34375 19.0312 6.64125 19.0312 7C19.0312 7.35875 18.7337 7.65625 18.375 7.65625Z" fill="currentColor"/>
                </svg>
              </div>

              <div className="hidden lg:flex absolute right-[27px] top-[18px] w-[54px] h-[54px] rounded-full bg-[#0C74C7]/10 items-center justify-center">
                <svg className="w-8 h-8 text-[#0C74C7]" fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.00004 15.1666C4.04671 15.1666 0.833374 11.9533 0.833374 7.99992C0.833374 4.04659 4.04671 0.833252 8.00004 0.833252C11.9534 0.833252 15.1667 4.04659 15.1667 7.99992C15.1667 11.9533 11.9534 15.1666 8.00004 15.1666ZM8.00004 1.83325C4.60004 1.83325 1.83337 4.59992 1.83337 7.99992C1.83337 11.3999 4.60004 14.1666 8.00004 14.1666C11.4 14.1666 14.1667 11.3999 14.1667 7.99992C14.1667 4.59992 11.4 1.83325 8.00004 1.83325Z" fill="currentColor"/>
                  <path d="M7.05358 10.3867C6.92025 10.3867 6.79358 10.3334 6.70025 10.2401L4.81358 8.3534C4.62025 8.16006 4.62025 7.84007 4.81358 7.64673C5.00691 7.4534 5.32691 7.4534 5.52025 7.64673L7.05358 9.18007L10.4802 5.7534C10.6736 5.56007 10.9936 5.56007 11.1869 5.7534C11.3802 5.94673 11.3802 6.26673 11.1869 6.46006L7.40691 10.2401C7.31358 10.3334 7.18691 10.3867 7.05358 10.3867Z" fill="currentColor"/>
                </svg>
              </div>

              <div className="hidden lg:flex absolute right-[31px] bottom-[146px] w-[53px] h-[53px] rounded-full bg-[#0C74C7]/10 items-center justify-center">
                <svg className="w-8 h-8 text-[#0C74C7]" fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11 4.66675H5.00004C4.63204 4.66675 4.33337 4.96541 4.33337 5.33341V6.00008C4.33337 6.36808 4.63204 6.66675 5.00004 6.66675H11C11.368 6.66675 11.6667 6.36808 11.6667 6.00008V5.33341C11.6667 4.96541 11.368 4.66675 11 4.66675Z" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.3942 4.66664L11.0582 3.33864C11.4808 2.49331 10.6028 1.58731 9.74483 1.98331L8.00016 2.78864L6.2555 1.98331C5.3975 1.58731 4.5195 2.49264 4.94216 3.33864L5.60616 4.66664" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.16668 6.66662L4.02201 8.49795C3.20801 9.80062 3.29135 11.4726 4.23135 12.688C4.92601 13.5866 5.99801 14.112 7.13401 14.112H8.86668C10.002 14.112 11.074 13.586 11.7687 12.688C12.7093 11.4726 12.7927 9.80062 11.9787 8.49728C11.6153 7.91528 11.2167 7.27795 10.834 6.66528" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div className="hidden lg:flex absolute left-0 top-[248px] w-[54px] h-[54px] rounded-full bg-[#0C74C7]/10 items-center justify-center">
                <svg className="w-7 h-7 text-[#0C74C7]" fill="none" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.1375 7.34375H10C9.74375 7.34375 9.53125 7.13125 9.53125 6.875V2.50625C9.53125 2.04375 9.7125 1.6125 10.0375 1.2875C10.3625 0.962501 10.7937 0.78125 11.2562 0.78125H11.2625C12.0438 0.7875 12.7812 1.09375 13.3437 1.65C13.9062 2.21875 14.2125 2.96875 14.2125 3.75V5.2625C14.2187 6.50625 13.3812 7.34375 12.1375 7.34375Z" fill="currentColor"/>
                  <path d="M5.62485 14.5813C5.3311 14.5813 5.0561 14.4687 4.84985 14.2562L3.81235 13.2125C3.7561 13.1562 3.6686 13.15 3.6061 13.2L2.53736 14C2.20611 14.25 1.7686 14.2937 1.3936 14.1062C1.0186 13.9187 0.787354 13.5438 0.787354 13.125V3.75C0.787354 1.8625 1.8686 0.78125 3.7561 0.78125H11.2561C11.5124 0.78125 11.7249 0.99375 11.7249 1.25C11.7249 1.50625 11.5124 1.71875 11.2561 1.71875H3.7561C2.36235 1.71875 1.7186 2.3625 1.7186 3.75V13.125C1.7186 13.2125 1.77485 13.25 1.8061 13.2688C1.8436 13.2875 1.90611 13.3 1.96861 13.25L3.03735 12.45C3.2311 12.3062 3.46235 12.2312 3.6936 12.2312C3.9811 12.2312 4.26235 12.3375 4.47485 12.5562L5.51235 13.6C5.54985 13.6375 5.59985 13.6438 5.62485 13.6438C5.64985 13.6438 5.69985 13.6375 5.73735 13.6L6.78735 12.55C7.17485 12.1625 7.78736 12.125 8.21861 12.4563L9.2811 13.25C9.34985 13.3 9.41235 13.2813 9.4436 13.2625C9.47485 13.2438 9.5311 13.2062 9.5311 13.125V2.5C9.5311 2.21875 9.59985 1.95 9.7186 1.71875H3.74985C2.36235 1.71875 1.7186 2.3625 1.7186 3.75V13.125C1.7186 13.2125 1.77485 13.25 1.8061 13.2688C1.8436 13.2875 1.90611 13.3 1.96861 13.25L3.03735 12.45C3.2311 12.3062 3.46235 12.2312 3.6936 12.2312Z" fill="currentColor"/>
                </svg>
              </div>

              {/* Phone mockups container */}
              <div className="relative w-full h-full flex items-center justify-center lg:justify-start">
                <div className="relative w-[280px] sm:w-[360px] lg:w-[303px]">
                  {/* Blue circle background - adjusted for mobile */}
                  <div className="absolute left-[20px] sm:left-[40px] lg:left-[41px] top-0 w-[220px] sm:w-[280px] lg:w-[262px] h-[220px] sm:h-[280px] lg:h-[258px]">
                    <div className="absolute inset-0 rounded-full bg-[#0C74C7]" />
                  </div>

                  {/* Phone 1 (Front) - Main phone on the left */}
                  <div className="absolute left-[40px] sm:left-[62px] lg:left-[63px] top-0 lg:top-[3px] z-20">
                    <img
                      src="/images/mobile2.png"
                      alt="اپلیکیشن ثروت‌لند"
                      className="w-[100px] sm:w-[130px] lg:w-[140px] h-auto object-contain drop-shadow-2xl"
                    />
                  </div>

                  {/* Phone 2 (Back) - Phone on the right side */}
                  <div className="absolute left-[110px] sm:left-[150px] lg:left-0 top-[30px] sm:top-[50px] lg:top-0 z-10">
                    <img
                      src="/images/mobile2.png"
                      alt="ثروت‌لند موبایل"
                      className="w-[100px] sm:w-[130px] lg:w-[116px] h-auto object-contain drop-shadow-2xl"
                    />
                  </div>

                  {/* Mobile-only floating icons */}
                  <div className="lg:hidden absolute right-0 top-[10px] w-[46px] h-[46px] rounded-full bg-[#0C74C7]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#0C74C7]" fill="none" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.0376 13.2065V16.0326C18.0376 17.1907 18.7895 18.0272 19.9069 18.0272C21.0177 18.0272 21.7762 17.1905 21.7759 16.0597L21.7762 13.2065C21.7763 12.6009 22.2519 12.1253 22.8576 12.1252H24.0047V16.0021C24.0047 18.0889 22.3142 19.7794 19.9069 19.7794C17.4996 19.7794 15.8091 18.0889 15.8091 16.0021V12.1252H16.9562C17.5619 12.1252 18.0376 12.6009 18.0376 13.2065Z" fill="currentColor"/>
                    </svg>
                  </div>

                  <div className="lg:hidden absolute left-[10px] top-[120px] w-[40px] h-[40px] rounded-full bg-[#0C74C7]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#0C74C7]" fill="none" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.9163 15.5312H6.59749C5.73124 15.5312 4.89999 15.1638 4.31374 14.525C3.72749 13.8863 3.43 13.0287 3.5 12.1625L4.22625 3.4475C4.2525 3.17625 4.15624 2.91376 3.97249 2.71251C3.78874 2.51126 3.535 2.40625 3.26375 2.40625H1.75C1.39125 2.40625 1.09375 2.10875 1.09375 1.75C1.09375 1.39125 1.39125 1.09375 1.75 1.09375H3.2725C3.91125 1.09375 4.51499 1.365 4.94374 1.82875C5.17999 2.09125 5.355 2.3975 5.45125 2.73875H16.38C17.2638 2.73875 18.0775 3.08875 18.6725 3.71875C19.2587 4.3575 19.5563 5.18875 19.4863 6.0725L19.0137 12.635C18.9175 14.2363 17.5175 15.5312 15.9163 15.5312Z" fill="currentColor"/>
                    </svg>
                  </div>

                  <div className="lg:hidden absolute left-[35px] top-[25px] w-[31px] h-[31px] rounded-full bg-[#0C74C7]/10" />

                  <div className="lg:hidden absolute right-[10px] top-[100px] w-[28px] h-[28px] rounded-full bg-[#0C74C7]/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#0C74C7]" fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.00004 15.1666C4.04671 15.1666 0.833374 11.9533 0.833374 7.99992C0.833374 4.04659 4.04671 0.833252 8.00004 0.833252C11.9534 0.833252 15.1667 4.04659 15.1667 7.99992C15.1667 11.9533 11.9534 15.1666 8.00004 15.1666Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content (Desktop: right, Mobile: bottom) */}
          <div className="flex flex-col items-center lg:items-end gap-8 lg:gap-12 order-2 lg:order-1">
            {/* Logo - Hidden on mobile (shown in header) */}
            <div className="hidden lg:flex items-center gap-3">
              <h1 className="text-xl font-bold text-[#0C74C7]">ثروت‌لند</h1>
              <img 
                src="/images/servatlendlogo.png" 
                alt="لوگو ثروت‌لند" 
                className="w-10 h-8"
              />
            </div>

            {/* Title and Description */}
            <div className="flex flex-col items-center lg:items-start gap-4 w-full text-center lg:text-right">
              <h2 className="text-xl lg:text-[40px] lg:leading-[42px] font-bold text-[#242933] max-w-[360px]">
                معماری نوین وام‌دهی دیجیتال
              </h2>
              <p className="text-sm lg:text-base leading-6 lg:leading-[26px] font-normal lg:font-medium text-[#4F545E] max-w-[284px] lg:max-w-[360px]">
                با ثروت‌لند، وام‌دهی آنلاین، شفاف و مبتنی بر داده را تجربه کن
              </p>
            </div>

            {/* CTA Button */}
            <button className="w-full max-w-[328px] lg:max-w-[360px] h-12 bg-[#0C74C7] text-white rounded-xl font-bold text-sm hover:bg-[#0C74C7]/90 transition-colors">
              ورود به اپلیکیشن ( به زودی )
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
