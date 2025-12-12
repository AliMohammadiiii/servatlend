export default function WhyChooseUs() {
  return (
    <section className="bg-white py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Right Side - Content (Desktop: right, Mobile: top) */}
            <div className="flex flex-col items-center lg:items-end gap-6 lg:gap-8 order-1 lg:order-2 text-center lg:text-right">
              <h2 className="text-lg lg:text-2xl font-bold text-[#242933]">
                چرا اعتبار حقوق؟
              </h2>
              
              <div className="space-y-6">
                <div className="flex flex-col items-center lg:items-end gap-4">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-[#0C74C7]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 lg:w-8 lg:h-8 text-[#0C74C7]" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base lg:text-lg font-bold text-[#242933]">بدون ضامن و بدون سند</h3>
                    <p className="text-sm leading-6 font-medium text-[#4F545E] max-w-[328px] lg:max-w-none">
                      نیازی به ارائه ضامن یا سند ملکی نیست؛ تنها با فیش حقوقی می‌توانید اقدام کنید.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center lg:items-end gap-4">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-[#0C74C7]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 lg:w-8 lg:h-8 text-[#0C74C7]" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 9H11V7H13M13 17H11V11H13M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base lg:text-lg font-bold text-[#242933]">تسویه از طریق کسر حقوق</h3>
                    <p className="text-sm leading-6 font-medium text-[#4F545E] max-w-[328px] lg:max-w-none">
                      اقساط به‌طور خودکار از حقوق ماهانه کسر می‌شود؛ دیگر نگران فراموشی پرداخت نباشید.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center lg:items-end gap-4">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-[#0C74C7]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 lg:w-8 lg:h-8 text-[#0C74C7]" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base lg:text-lg font-bold text-[#242933]">امنیت بالا و حریم خصوصی</h3>
                    <p className="text-sm leading-6 font-medium text-[#4F545E] max-w-[328px] lg:max-w-none">
                      اطلاعات شما با بالاترین استانداردهای امنیتی محافظت می‌شود.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Left Side - Phone Mockups (Desktop: left, Mobile: bottom) */}
            <div className="relative h-[300px] lg:h-[461px] order-2 lg:order-1">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Blue Circle Background */}
                <div className="absolute left-1/2 -translate-x-1/2 lg:left-[74px] lg:translate-x-0 top-0">
                  <div className="relative w-[280px] lg:w-[369px] h-[280px] lg:h-[369px]">
                    <div className="absolute inset-0">
                      <svg viewBox="0 0 369 461" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <ellipse cx="178.401" cy="254.894" rx="178.401" ry="177.611" fill="#0C74C7"/>
                      </svg>
                    </div>
                    
                    {/* Phone 1 (Front Left) */}
                    <div className="absolute left-[20px] lg:left-[22px] top-0 z-20">
                      <img
                        src="/images/mobile2.png"
                        alt="اپلیکیشن ثروت‌لند"
                        className="w-[120px] lg:w-[153px] h-auto object-contain drop-shadow-2xl"
                      />
                    </div>

                    {/* Phone 2 (Back Right) */}
                    <div className="absolute left-[150px] lg:left-[215px] top-[60px] lg:top-[97px] z-10">
                      <img
                        src="/images/mobile2.png"
                        alt="ثروت‌لند موبایل"
                        className="w-[120px] lg:w-[153px] h-auto object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
