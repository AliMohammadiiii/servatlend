export default function Features() {
  const features = [
    {
      icon: "/images/illustration3.png",
      title: "دسترسی سریع به اعتبار",
      description: "بررسی و تایید درخواست در کمتر از یک ساعت، بدون نیاز به مراجعه حضوری و ارائه مدارک پیچیده.",
    },
    {
      icon: "/images/illustration2.png",
      title: "خرید با اعتبار",
      description: "امکان خرید کالا و خدمات مورد نیاز شما بدون دغدغه، فراهم‌شده است؛ هزینه کالا یا خدمات فقط از طریق کسر از حقوق شما پرداخت می‌شود.",
    },
    {
      icon: "/images/illustration1.png",
      title: "بازپرداخت شفاف",
      description: "تمامی اطلاعات اقساط و هزینه‌ها در پنل کاربری شما قابل مشاهده است؛ تاریخ و مبلغ هر قسط به‌صورت شفاف و واضح اعلام می‌شود.",
    },
  ];

  return (
    <section className="bg-white py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-[1121px] mx-auto">
          <h2 className="text-lg lg:text-2xl font-bold text-[#242933] text-center mb-10 lg:mb-16">
            امکانات ثروت‌لند
          </h2>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-40">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center gap-5 lg:gap-6 text-center">
                <div className="w-[100px] h-[100px] lg:w-[132px] lg:h-[132px] flex items-center justify-center">
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-base lg:text-lg font-bold text-[#242933]">
                  {feature.title}
                </h3>
                <p className="text-sm font-medium leading-6 text-[#4F545E]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
