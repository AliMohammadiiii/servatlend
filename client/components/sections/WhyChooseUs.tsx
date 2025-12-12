export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Phone Mockups */}
            <div className="relative h-[300px] md:h-[380px] lg:h-[461px] order-2 lg:order-1">
              <div className="absolute left-0 top-12 md:top-16 lg:top-20 w-full h-[200px] md:h-[250px] lg:h-[296px] bg-gradient-to-b from-[#0C74C7]/5 to-transparent rounded-3xl" />

              <div className="relative w-full h-full flex items-start justify-center">
                {/* Blue Circle Background */}
                <div className="absolute left-[10%] md:left-[15%] lg:left-[74px] top-0">
                  <div className="relative w-[260px] md:w-[320px] lg:w-[369px] h-[260px] md:h-[320px] lg:h-[369px]">
                    <div className="absolute inset-0 rounded-full bg-[#0C74C7]" style={{ 
                      clipPath: 'ellipse(178px 178px at 50% 55%)'
                    }} />
                    
                    {/* Phone 1 (Front Left) */}
                    <div className="absolute left-[22px] top-0 z-20">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F2ccfcdc057424b9eb03a0d097a076671%2F7ee56e36d4144690b07e6f91a0cf1594?format=webp&width=800"
                        alt="اپلیکیشن ثروت‌لند"
                        className="w-[100px] md:w-[130px] lg:w-[153px] h-auto object-contain drop-shadow-2xl"
                      />
                    </div>

                    {/* Phone 2 (Back Right) */}
                    <div className="absolute left-[150px] md:left-[185px] lg:left-[215px] top-[65px] md:top-[82px] lg:top-[97px] z-10">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F2ccfcdc057424b9eb03a0d097a076671%2F0bab5631e76e478db924775309959c2f?format=webp&width=800"
                        alt="ثروت‌لند موبایل"
                        className="w-[100px] md:w-[130px] lg:w-[153px] h-auto object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex flex-col items-end gap-8 order-1 lg:order-2">
              <h2 className="text-2xl font-bold text-[#242933] text-right">
                چرا ثروت‌لند؟
              </h2>
              
              <p className="text-base leading-[26px] font-medium text-[#4F545E] text-right">
                چون ثروت‌لند مسیر خرید اقساطی را ساده کرده است. بدون نیاز به ضامن، بدون پیش‌پرداخت و بدون مراجعه حضوری، می‌توانید کالای مورد نیازتان را تهیه کنید و هزینه آن را به‌صورت اقساطی و منظم پرداخت نمایید. بازپرداخت از طریق کسر از حقوق انجام می‌شود تا هیچ نگرانی بابت پرداخت اقساط نداشته باشید.
                <br /><br />
                ثروت‌لند با فرآیند شفاف، سرعت بالا و دسترسی آسان به اعتبار، تجربه‌ای مطمئن برای خرید امروز و پرداخت در آینده فراهم می‌کند.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
